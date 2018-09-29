import * as server from '../services/homePage'
export default {

    namespace: 'homePage',

    state: {
        homePageUserInfo: {},
        homePageList: [],
    },

    effects: {
        *getHomePageUserInfo({ payload }, { call, put }) {
            const res = yield call(server.getHomePageUserInfo, payload)
            
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateHomePageUserInfo',
					payload: res.data.res
                });
			}
        },
        *getHomePageList({ payload }, { call, put }) {
            const res = yield call(server.getHomePageList, payload)
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateHomePageList',
					payload: res.data.res
                });
			}
        },
    },

    reducers: {
        updateHomePageUserInfo(state, { payload }){
		    return {
                ...state,
                homePageUserInfo: payload
            }
        },
        updateHomePageList(state, { payload }){
		    return {
                ...state,
                homePageList: payload
            }
        },
    },

};
