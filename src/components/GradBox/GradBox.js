import React from 'react'
import style from './GradBox.less'

const GradBox = () => {
  	return (
    	<div className={style.grad_box}>
            <div className={style.grad_cell}>
                <img src={require("../../assets/yay.jpg")} alt="" />
                <div className={style.grad_name}>Aaron Wangener</div>
                <div className={style.grad_position}>CTO</div>
            </div>
            <div className={style.grad_cell}>
                <img src={require("../../assets/yay.jpg")} alt="" />
                <div className={style.grad_name}>Aaron Wangener</div>
                <div className={style.grad_position}>CTO</div>
            </div>
            <div className={style.grad_cell}>
                <img src={require("../../assets/yay.jpg")} alt="" />
                <div className={style.grad_name}>Aaron Wangener</div>
                <div className={style.grad_position}>CTO</div>
            </div>
    	</div>
  	);
};

export default GradBox;
