import React from 'react'
import style from './Expand.less'
import Line from './Line';

const Expand = (props) => {
    const { data } = props;

  	return (
    	<div className={style.expand}>
            <div className={style.expand_tit}>项目介绍</div>
            <div className={style.expand_con} dangerouslySetInnerHTML={{__html: (data && data.founding_team)}}>
            </div>
            <Line officel={data && data.official_network} whitePaper={data && data.white_paper} />
    	</div>
  	);
};

export default Expand;
