import React from 'react'
import style from './Expand.less'

const Line = () => {
  	return (
    	<div className={style.line}>
            <div className={style.line_cell}>
                <img src={require("../../assets/wiki/officel.png")} alt="" />
                <span>官网</span>
            </div>
            <div className={style.line_cell}>
                <img src={require("../../assets/wiki/book.png")} alt="" />
                <span>白皮书</span>
            </div>
    	</div>
  	);
};

export default Line;
