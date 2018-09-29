import * as server from '../services/businessCard'
export default {

    namespace: 'businessCard',

    state: {
        businessCard: '',
    },

    subscriptions: {
        setup({ dispatch, history }) {
          return history.listen(({pathname, query}) => {
            if (pathname === '/BusinessCard') {
              dispatch({type: 'getBusinessCard', payload: query})
            }
          })
        },
    },

    effects: {
        *getBusinessCard({ payload }, { call, put }) {
            const res = yield call(server.getBusinessCard, payload)
            
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateBusinessCard',
					payload: res.data.res
                });
			}
        },
    },

    reducers: {
        updateBusinessCard(state, { payload }){
		    return {
                ...state,
                businessCard: payload
            }
        },
    },

};
