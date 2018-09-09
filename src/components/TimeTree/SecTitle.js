import React from 'react'
import style from './Index.less'

const SecTitle = (props) => {
    const { title } = props;

  	return (
    	<div className={style.sec_title}>
			{ title }
    	</div>
  	);
};

SecTitle.defaultProps = {
    title: '默认时间'
};

export default SecTitle;
