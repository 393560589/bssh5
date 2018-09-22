import React from 'react'
import style from './Index.less'

const Header = (props) => {
	const { data } = props;

  	return (
    	<div className={style.content}>
            <img src={data && data.article_img} alt="头像"/>
            <div className={style.content_title}>{data && data.article_title}</div>
            <div className={style.content_con}  dangerouslySetInnerHTML={{__html: (data && data.article_description)}}>
	    </div>
    	</div>
  	);
};

export default Header;
