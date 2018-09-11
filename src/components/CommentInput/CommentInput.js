import React from 'react'
import style from './CommentInput.less'

const CommentInput = () => {
  	return (
    	<div className={style.comment_input}>
            <input className={style.comment_write} type='text' placeholder='写评论...' />
    	</div>
  	);
};

export default CommentInput;
