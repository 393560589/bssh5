import React, { PureComponent } from 'react'
import style from './Header.less'

class Header extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			keyword: '',
			showSearch: false,
			showCancel: false,
		};
	}

	inputChange = (e) => {
		const that = this;
		let value = e.target.value;

		if(value.trim() === '') {
			that.setState({
				showSearch: false,
				keyword: value.trim()
			});
		}
		else {
			that.setState({
				showSearch: true,
				keyword: value.trim()
			});
		}
	}

	render() {
		const { showSearch, showCancel, keyword } = this.state;

		return (
			<div className={style.header} onClick={() => this.props.handleSearch()}>
        <div className={style.headers}>
          <img style={{width:'.14rem',height:'.14rem'}} src={require('../../assets/search.png')} alt=""/>
          <input
            className={style.input}
            disabled={true} type="text"
            value={ keyword } onChange={this.inputChange} placeholder={'搜资讯、交易所、项目、币种'}/>
        </div>
				<button className={ showSearch ? `${style.search} ${style.show}` : `${style.search} ${style.hide}` }>搜索</button>
				<button className={ showCancel ? `${style.cancel} ${style.show}` : `${style.cancel} ${style.hide}` }>取消</button>
			</div>
		  );
	}

};

export default Header;
