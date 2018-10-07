import React, { PureComponent } from 'react'
import style from './CommentList.less'
import {formatData} from '../../utils/functions'

class CommentList extends PureComponent {

    handleUrl = (url) => {
        const { handleClick } = this.props;
        handleClick();
        window.location.href = url;
    }

    render() {
        const { data } = this.props;

        return (
            <div className={style.comment_list}>
                {
                    data && data.map(item => {
                        return <div className={style.comment_cell} onClick={() => this.handleUrl(item.url)}>
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
    }
  	
};


export default CommentList;
