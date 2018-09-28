import React from 'react'
import ReactDOM from 'react-dom';
import style from './CommentInput.less'
import { TextareaItem } from 'antd-mobile';

class CommentInput extends React.Component {

	state = {
		textareaRows: 1
	}

  	render() {
		let {
			textareaRows
		} = this.state;
		return (
			<div className={style.comment_input}>
				<TextareaItem
					ref={ (el) => { this.TextareaItemRefs = el } }
					rows={ textareaRows }
					className={style.comment_write}
					autoHeight={ true }
					placeholder='写评论...'
					onFocus={ this.TextareaFocus }
					onBlur={ this.TextareaBlur }
				/>
				{/* <input className={style.comment_write} type='text' placeholder='写评论...' /> */}
			</div>
		);
	}
	  
	TextareaFocus = (e) => {
		let target = ReactDOM.findDOMNode(this.TextareaItemRefs)
		console.log(target)
		this.setState({
			textareaRows: 3
		})
		this.timer = setInterval(() => {
			target.scrollIntoViewIfNeeded(true);
			target.scrollIntoView(true);
		}, 300)
	}

	TextareaBlur = () => {
		this.setState({
			textareaRows: 1
		})
		this.timer && clearInterval(this.timer);
	}
};

export default CommentInput;
