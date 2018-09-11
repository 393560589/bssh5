import * as server from '../services'
export default {

  namespace: 'index',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *test({ payload,callback=()=>{} }, { call, put }) {
      const response = yield call(server.getbanner,payload)
      callback(response)
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
