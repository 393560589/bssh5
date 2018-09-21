import React from 'react'
import style from './Index.less'
import Share from './Share'

const Content = (props) => {
    const { title, content } = props;

  	return (
    	<div className={style.content}>
			{/* <div className={style.content_tit}>{ title }</div> */}
			<div className={style.content_dec}>{ content }</div>
			<Share />
    	</div>
  	);
};

export default Content;
