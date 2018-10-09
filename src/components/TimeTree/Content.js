import React from 'react'
import style from './Index.less'


const Content = (props) => {
    const { title, content, index, handleChangeCurrent } = props;

  	return (
    	<div className={style.content}>
			<div className={style.content_tit}>{ title }</div>
			  <div className={style.content_dec} onClick={() => handleChangeCurrent(index)}>{ content }</div>
    	</div>
  	);
};

export default Content;
