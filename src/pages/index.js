import React from 'react';
import { connect } from 'dva';
import CoinMessage from './CoinMessage/page';


function IndexPage() {
  return <CoinMessage />
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
