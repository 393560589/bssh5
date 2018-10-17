import React from 'react'
import style from './Index.less'

const Header = (props) => {
	const { data } = props;

	let str = data && data.article_description || '';
	let dec = str.replace(/<\/?.+?\/?>/g, '');

  	return (
    	<div className={style.content}>
            <div className={style.img}>
              <img src={'//www.bitss.pro/static/' + (data.article_img)} alt="头像"/>
            </div>

            <div className={style.content_title}>{data && data.article_title}</div>
            {/* <div className={style.content_con} dangerouslySetInnerHTML={{__html: (data && data.article_description)}}>
	    	</div> */}
		{/*	<div className={style.content_con}>{ dec }</div>*/}
    	</div>
  	);
};

export default Header;
