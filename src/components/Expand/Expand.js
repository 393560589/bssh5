import React, { PureComponent } from 'react'
import style from './Expand.less'
import Line from './Line';

class Expand extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false
        };
    }

    render() {
        const { data, title, type, officel, whitePage } = this.props;

        return (
            <div className={style.expand}>
                <div className={style.expand_tit}>{ title }</div>
                <div className={this.state.isShow ? style.expand_con : style.expand_con_hide} dangerouslySetInnerHTML={{__html: data}}>
                </div>
                {
                    data ? <div className={style.expand_more} onClick={() => { this.setState({ isShow: !this.state.isShow }) }}>{ this.state.isShow ? "收起" : "...展开" }</div> : null
                }
                <Line type={type} officel={officel} whitePaper={whitePage} />
            </div>
        );
    }
    
};

export default Expand;
