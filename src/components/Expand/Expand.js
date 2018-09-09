import React from 'react'
import style from './Expand.less'
import Line from './Line';

const Expand = () => {
  	return (
    	<div className={style.expand}>
            <div className={style.expand_tit}>项目介绍</div>
            <div className={style.expand_con}>
                从技术角度讲，MXC是基于LPWAN和Machine eXchange Protocol（MXProtocol，极域协议）的去中心化“数据交易网络”，进而支撑其Token经济体系。MXC带来新一代LPWAN的同时，结合了物联网系统，通过资产数字化，促使公司和个人通过“物
            </div>
            <Line />
    	</div>
  	);
};

export default Expand;
