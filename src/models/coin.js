import * as server from '../services/coin'
export default {

    namespace: 'coin',

    state: {
        coinList: [],
        coinDetail: ''
    },

    subscriptions: {
        setup({ dispatch, history }) {
        },
    },

    effects: {
        *getCoinList({ payload, callback = () => {} }, { call, put }) {
            const res = yield call(server.getCoinList, payload)
            
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'updateCoinList',
					payload: res.data.res
                });
                callback(res.data.res);
			}
			else {
				// Toast.info(data.err_msg, 2,null,false);
			}
        },
        *getFirstCoinList({ payload, callback = () => {} }, { call, put }) {
            const res = yield call(server.getCoinList, payload)
            
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'refreshCoinList',
					payload: res.data.res
                });
                callback(res.data.res);
			}
			else {
				// Toast.info(data.err_msg, 2,null,false);
            }
        },
        *getCoinDetail({ payload }, { call, put }) {
            const res = yield call(server.getCoinDetail, payload)
            console.log(res);
            
            if(res.data && res.data.status === 200) {
				yield put({
					type: 'setCoinDetail',
					payload: res.data.res
                });
			}
        },
    },

    reducers: {
        // 更新
        updateCoinList(state, { payload }){
		    return {
                ...state,
                coinList: state.coinList.concat(payload)
            }
        },
        // 刷新数据
        refreshCoinList(state, { payload }) {
            return {
                ...state,
                coinList: payload
            }
        },
        // 设置币讯详细信息
        setCoinDetail(state, { payload }) {
            return {
                ...state,
                coinDetail: payload
            }
        }
    },

};
