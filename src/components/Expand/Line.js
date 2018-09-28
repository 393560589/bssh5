import React from 'react'
import style from './Expand.less'

const Line = (props) => {
    const { officel = '', whitePaper = '', type } = props;

    console.log(props);

  	return (
    	<div className={style.line}>
            {
                (type === 2 || type === 6 || type === 4 || type === 5 || type === 8) ? 
                            <a className={style.line_cell} href={officel}>
                                <div>
                                    <img src={require("../../assets/wiki/officel.png")} alt="" />
                                    <span>进入官网</span>
                                </div>
                            </a> : null
            }

            {
                type === 2 ? <a className={style.line_cell} href={whitePaper}>
                                <div className={style.line_cell}>
                                    <img src={require("../../assets/wiki/book.png")} alt="" />
                                    <span>白皮书</span>
                                </div>
                            </a> : null
            }
            
            

    	</div>
  	);
};

export default Line;
