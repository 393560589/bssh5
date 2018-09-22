import React from 'react'
import style from './Index.less'

const Title = (props) => {
	const { title } = props;
	console.log(title);

  	return (
    	<div className={style.title}>
			{ title }
    	</div>
  	);
};

Title.defaultProps = {
    title: '默认时间'
};

export default Title;
