
import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Icon } from 'antd-mobile'
import Link from 'umi/link'
import { Header, TimeTree } from 'components'

class CoinMessage extends PureComponent {

    render() {
        return (
            <div>
                <Header />
                <Link to='/BaiWiki'>
                    <TimeTree />
                </Link>
            </div>
            
        );
    }
}

export default CoinMessage;