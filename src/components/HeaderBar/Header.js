import React from 'react'
import style from './Index.less'
import { Icon } from 'antd-mobile'

const Header = (props) => {

  	return (
    	<div className={style.header}>
            <div className={style.header_left}>
                <div className={style.header_left_icon}>
                    <Icon type="left" color="#fff" />
                </div>
            </div>
            <div className={style.header_center}>项目</div>
            <div className={style.header_right}></div>
    	</div>
  	);
};

export default Header;
