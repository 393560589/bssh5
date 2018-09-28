import React from 'react'
import style from './Index.less'

const Share = (props) => {
    const {onShare} = props
  	return (
    	<div className={style.share} onClick={()=>{

          onShare()
        }

    	}>
            <span>分享</span>
    	</div>
  	);
};

export default Share;
