import React from 'react'
import style from './Index.less'

const Header = (props) => {

  	return (
    	<div className={style.content}>
            <img src={require("../../assets/yay.jpg")} alt="头像"/>
            <div className={style.content_title}>柚子币(EOS) </div>
            <div className={style.content_con}>是一种全新的基于区块链智能合约平台</div>
    	</div>
  	);
};

export default Header;
