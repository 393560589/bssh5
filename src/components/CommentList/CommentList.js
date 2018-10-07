import React from 'react'
import style from './CommentList.less'
import {formatData} from '../../utils/functions'



const CommentList = (props) => {
    const { data } = props;

    function handleUrl(url) {
        window.location.href = url;
    }

  	return (
    	<div className={style.comment_list}>
            {
                data && data.map(item => {
                    return <div className={style.comment_cell} onClick={() => handleUrl(item.url)}>
                                <div className={style.comment_title}>{ item && item.title }</div>
                                <div className={style.comment_con_box}>
                                    <div className={style.comment_time}>{ item && formatData(item.time_num) }</div>
                                    <div className={style.comment_label}>{ item && item.resource }</div>
                                </div>
                            </div>
                })
            }
    	</div>
  	);
};


export default CommentList;
