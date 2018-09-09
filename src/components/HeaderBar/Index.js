import React from 'react'
import style from './Index.less'
import Header from './Header'
import Content from './Content'

const HeaderBar = (props) => {

  	return (
    	<div className={style.header_bar}>
            <Header />
            <Content />
    	</div>
  	);
};

export default HeaderBar;
