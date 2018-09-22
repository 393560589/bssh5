import React,{PureComponent} from 'react'
import {connect} from 'dva'

import withRouter from 'umi/withRouter'
import Flexable from '../utils/flexable'
import Disscale from '../utils/disscale'
import './index.less'

Flexable.init();
Disscale.init();

class App extends PureComponent {
    constructor(props){
      super(props)
    }
    componentDidUpdate(prevProps){
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
    render(){
      return (

              <div>
                {
                  this.props.children
                }
              </div>

      )
    }
}
export default connect(({ loading })=>({ loading }))(withRouter(App))
