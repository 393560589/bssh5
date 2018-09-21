import * as server from '../services/wiki'
export default {

    namespace: 'wiki',

    state: {
        baiWikiDetail: ''
    },

    effects: {
        *getWikiDetail({ payload }, { call, put }) {
            const res = yield call(server.getWikiDetail, payload)
            
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateWikiDetail',
					payload: res.data.res
                });
			}
        }
    },

    reducers: {
        updateWikiDetail(state, { payload }){
		    return {
                ...state,
                baiWikiDetail: payload
            }
        }
    },

};
