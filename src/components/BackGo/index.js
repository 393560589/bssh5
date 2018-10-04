import React, { PureComponent } from 'react'
import style from './index.less'

class Index extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {

		};
	}



	render() {
		const { showSearch, showCancel, keyword } = this.state;

		return (
			<div className={style.header} onClick={() => this.props.handleSearch()}>
				<input className={style.input} disabled={true} type="text" value={ keyword } onChange={this.inputChange} placeholder={'输入关键词'}/>
				<button className={ showSearch ? `${style.search} ${style.show}` : `${style.search} ${style.hide}` }>搜索</button>
				<button className={ showCancel ? `${style.cancel} ${style.show}` : `${style.cancel} ${style.hide}` }>取消</button>
			</div>
		  );
	}

};

export default Index;
