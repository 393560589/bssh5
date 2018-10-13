import React from 'react'
import style from './Index.less'

const Share = (props) => {
    const {onShare} = props
  	return (
    	<div className={style.share} onClick={()=>{

          onShare()
        }

    	}>
        <img
          style={{width:'.22rem',height:'.22rem'}}
          src={require('../../assets/coin/shares.png')} alt="分享"/><span>分享</span>
    	</div>
  	);
};

export default Share;
