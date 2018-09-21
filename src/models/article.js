import * as server from '../services/article'
export default {

    namespace: 'article',

    state: {
        articleDetail: '',
        commentList: []
    },

    effects: {
        *getArticleDetail({ payload }, { call, put }) {
            const res = yield call(server.getArticleDetail, payload)
            
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateArticleDetail',
					payload: res.data.res
                });
			}
        },
        *getCommentList({ payload }, { call, put }) {
            const res = yield call(server.getCommentList, payload)
            
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateCommentList',
					payload: res.data.res
                });
			}
        },
    },

    reducers: {
        updateArticleDetail(state, { payload }){
		    return {
                ...state,
                articleDetail: payload
            }
        },
        updateCommentList(state, { payload }) {
            return {
                ...state,
                commentList: payload
            }
        }
    },

};
