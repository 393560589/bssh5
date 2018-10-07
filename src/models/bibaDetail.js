import * as server from '../services/bibaDetail';
export default {

    namespace: 'bibaDeatil',

    state: {
        bibaDeatil: {},
        bibaDeatilOneBack: [],
        commentList: []
    },

    subscriptions: {
        setup({ dispatch, history }) {
          return history.listen(({pathname, query}) => {
            if (pathname === '/BiBaDetail') {
                dispatch({type: 'getBiBaDetail', payload: query})
                dispatch({type: 'getBiBaDetailOneBack', payload: { id: query.id }})

                // if(!query.phone) {
                //     window.postMessage(JSON.stringify({type: 'login', id: query.id}), '*');
                // }
            }
          })
        },
    },

    effects: {
        *getBiBaDetail({ payload }, { call, put }) {
            const res = yield call(server.getBiBaDetail, payload)
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateBiBaDetail',
					payload: res.data.res
                });
			}
        },
        *getBiBaDetailOneBack({ payload }, { call, put }) {
            const res = yield call(server.getBiBaDetailOneBack, payload)
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateBiBaDetailOneBack',
					payload: res.data.res
                });
			}
        },

        *postOne({payload, callback}, { call, put }) {
            const res = yield call(server.postOne, payload)
            if(res.data && res.data.status === 200) {
				callback(res.data);
			}
        },
        *postTwo({payload, callback}, { call, put }) {
            const res = yield call(server.postTwo, payload)
            if(res.data && res.data.status === 200) {
				callback();
			}
        }
    },

    reducers: {
        updateBiBaDetail(state, { payload }){
		    return {
                ...state,
                bibaDeatil: payload
            }
        },
        updateBiBaDetailOneBack(state, { payload }){
		    return {
                ...state,
                bibaDeatilOneBack: payload
            }
        },
        updateComment(state, { payload }) {
            return{
                ...state,
                bibaDeatilOneBack: payload
            };
        }
    },

};
