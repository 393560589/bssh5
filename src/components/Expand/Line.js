import React from 'react'
import style from './Expand.less'

const Line = (props) => {
    const { officel = '', whitePaper = '' } = props;

  	return (
    	<div className={style.line}>
            <a className={style.line_cell} href={officel}>
                <div>
                    <img src={require("../../assets/wiki/officel.png")} alt="" />
                    <span>官网</span>
                </div>
            </a>
            <a className={style.line_cell} href={whitePaper}>
                <div className={style.line_cell}>
                    <img src={require("../../assets/wiki/book.png")} alt="" />
                    <span>白皮书</span>
                </div>
            </a>

    	</div>
  	);
};

export default Line;
