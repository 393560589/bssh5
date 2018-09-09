
import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Icon } from 'antd-mobile'
import { Header, TimeTree } from 'components'

class CoinMessage extends PureComponent {

    render() {
        return (
            <div>
                <Header />
                <TimeTree />
            </div>
            
        );
    }
}

export default CoinMessage;