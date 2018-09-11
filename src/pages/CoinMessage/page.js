
import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Icon } from 'antd-mobile'
import Link from 'umi/link'
import { Header, TimeTree } from 'components'
@connect(({index})=>({...index}))
class CoinMessage extends PureComponent {
    componentDidMount(){
      const {dispatch} = this.props;
      dispatch({
        type:'index/test',
        payload:{},
        callback:(data)=>{
          console.log(data)
        }
      })
    }
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
