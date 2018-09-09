import React from 'react'
import style from './CommentList.less'

const CommentList = () => {
  	return (
    	<div className={style.comment_list}>
            <div className={style.comment_cell}>
                <div className={style.comment_title}>何一：尽管币安有国际化背景及优质技术体验，但币安强大之处在于价值观</div>
                <div className={style.comment_con_box}>
                    <div className={style.comment_time}>2018-08-09</div>
                    <div className={style.comment_label}>未来财经</div>
                </div>
            </div>
    	</div>
  	);
};

export default CommentList;
