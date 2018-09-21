import React from 'react'
import style from './CommentGroup.less'

const CommentGroup = () => {
  	return (
    	<div className={style.comment_group}>
            <CommentTitle />

            <CommentItem />
            <CommentItem />
    	</div>
  	);
};


const CommentTitle = () => {
    return(
        <div className={style.comment_title}>全部评论</div>
    )
}

const CommentItem = () => {
    return(
        <div className={style.comment_item}>
            <img src={require('../../assets/yay.jpg')} alt="" />
            <div className={style.comment_cell}>
                <div className={style.comment_name}>穿靴子的猫</div>
                <div className={style.comment_time}>2018-8-24</div>
                <div className={style.comment_content}>黎明前的黑暗是最寒冷最难熬的！黎明前的黑暗是最寒冷最难熬的！</div>
            </div>
        </div>
    )
}

export default CommentGroup;
