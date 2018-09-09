import React from 'react';
import { connect } from 'dva';
import CoinMessage from './CoinMessage/page';
import Flexable from 'utils/flexable'
import Disscale from 'utils/disscale'

Flexable.init()
Disscale.init()

function IndexPage() {
  return <CoinMessage />
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
