import React from 'react'
import style from './Header.less'

const Header = () => {
  	return (
    	<div className={style.header}>
			<input className={style.input} type="text" />
    	</div>
  	);
};

export default Header;
