import React from 'react'
import style from './ListGroup.less'

const ListGroup = (props) => {
    const { data } = props;

  	return (
    	<div className={style.list_group}>
            <ListTitle />

            {
                data.map((item, index) => {
                    return <ListItem key={index} data={item} />
                })
            }
    	</div>
  	);
};

const redirectToDetail = (rediectToUrl) => {
    if (!rediectToUrl) return;
    window.location.href = rediectToUrl;
}

const ListTitle = () => {
    return(
        <div className={style.list_title}>推荐文章</div>
    )
}

const ListItem = (props) => {
    const { data } = props;

    return(
        <div className={style.list_item} onClick={ () => { redirectToDetail( data.url || false ) } }>
            <div className={style.list_item_left}>
                <div className={style.list_item_title}>
                    {data.title}
                </div>
                <div className={style.list_item_time}>
                    {data.resource} · {data.time_num}
                </div>
            </div>
            <div className={style.list_item_right}>
                <img src={data.thumbnail} alt="" />
            </div>
        </div>
    )
}



export default ListGroup;
