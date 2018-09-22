import React from 'react'
import style from './Index.less'
import Header from './Header'
import Content from './Content'

const titles = ['', '', '', '人物', '', '钱包', '交易所', '资本', '媒体'];

const HeaderBar = (props) => {
	const { data } = props;

  	return (
    	<div className={style.header_bar}>
            <Header title={titles[data && data.cont_type]} />
            <Content data={data} />
    	</div>
  	);
};

export default HeaderBar;
