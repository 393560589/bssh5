import React from 'react'
import style from './GradList.less'

const GradList = () => {
  	return (
    	<div className={style.grad_list}>
            <div className={style.grad_cell}>
                <img src={require("../../assets/yay.jpg")} alt="" />
                <div className={style.grad_name}>火币点对点</div>
            </div>
            <div className={style.grad_cell}>
                <img src={require("../../assets/yay.jpg")} alt="" />
                <div className={style.grad_name}>火币点对点</div>
            </div>
            <div className={style.grad_cell}>
                <img src={require("../../assets/yay.jpg")} alt="" />
                <div className={style.grad_name}>火币点对点</div>
            </div>
            <div className={style.grad_cell}>
                <img src={require("../../assets/yay.jpg")} alt="" />
                <div className={style.grad_name}>火币点对点</div>
            </div>
            <div className={style.grad_cell}>
                <img src={require("../../assets/yay.jpg")} alt="" />
                <div className={style.grad_name}>火币点对点</div>
            </div>
    	</div>
  	);
};

export default GradList;
