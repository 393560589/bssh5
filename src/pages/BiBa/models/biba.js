import * as server from '../../../services/biba.js'
export default {
  namespace: 'biba',

  state: {
    articleList: [],
    barInfo: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({pathname, query}) => {
        console.log(query)
        if (pathname === '/BiBa') {
          // dispatch({type: 'fetchList', payload: query})
          // dispatch({type: 'fetchBarInfo', payload: query})
        }
      })
    },
  },

  effects: {
    *fetchList({ payload }, { call, put }) {
      const response = yield call(server.barArticles,payload)
      yield put({
        type: 'updateList',
        payload: response
      })
    },
    *fetchBarInfo({ payload }, { call, put}) {
      const res = yield call(server.barInfo, payload)
      yield put({
        type: 'save',
        payload: {
          barInfo: res
        }
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    updateList(state, { payload }) {
      if (Array.isArray(payload)) {
        return {...state, articleList: [...state.articleList, ...payload]}
      }
    }
  },

};
