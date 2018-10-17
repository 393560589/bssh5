import React from 'react'
import style from './Index.less'
import { Icon } from 'antd-mobile'
import router from 'umi/router'

const Header = (props) => {
    const { title = '标题', type, id, article_content } = props;
    console.log(props);
  	return (
    	<div className={style.header}>
            <div className={style.header_left}>
                <div className={style.header_left_icon}>
                    {/* <Icon type="left" color="#fff" /> */}
                </div>
            </div>
            <div className={style.header_center}>{ title }</div>
            <div className={style.header_right}>
            {
                type == '3' ?
                  article_content && (
                    <span style={{color: "#4E8CEE"}} onClick={ () => router.push(`/BusinessCard?id=${id}`) }>联系我</span>
                  )
                   : null
            }
            </div>
    	</div>
  	);
};

export default Header;
