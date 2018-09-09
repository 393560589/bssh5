import React from 'react'
import style from './ListGroup.less'

const ListGroup = () => {
  	return (
    	<div className={style.list_group}>
            <ListTitle />

            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
    	</div>
  	);
};

const ListTitle = () => {
    return(
        <div className={style.list_title}>推荐文章</div>
    )
}

const ListItem = () => {
    return(
        <div className={style.list_item}>
            <div className={style.list_item_left}>
                <div className={style.list_item_title}>
                    通证“C位”战—金融行业 | TokenInsight
                </div>
                <div className={style.list_item_time}>
                    金色财经 · 2018-07-28
                </div>
            </div>
            <div className={style.list_item_right}>
                <img src={require("../../assets/yay.jpg")} alt="" />
            </div>
        </div>
    )
}

export default ListGroup;
