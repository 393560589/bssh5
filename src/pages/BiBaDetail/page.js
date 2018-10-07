import React, { PureComponent } from 'react'
import { connect } from 'dva'
import style from './index.less'
import { CommentInput } from 'components'
import formate from '../../utils/date.js'
import { TextareaItem } from 'antd-mobile'

@connect(({bibaDeatil, index})=>({...bibaDeatil, ...index}))
class BiBaDetail extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            type: '1',  // 1-》帖子回复  2-》回复评论
            showComment: false,
            content: '',
            index: 0
        };
    }

    componentDidMount() {
        const { location } = this.props;
        let params = location.query;

        this.setState({
            id: params.id
        });
    }

    /**
     * 回复弹出
     * @type 一级回复  1 =》 一级   2 =》 2级
     * @id 帖子id
     * @pid 二级id
     */ 
    handleSaySome = (type, pid, index) => {
        const that = this;

        this.setState({
            type,
            pid,
            index,
            showComment: true
        }, () => {
            that.TextareaItemRefs.focus()
        });
    }

    // 回复
    postData = () => {
        const { type, id, pid, phone, content, index } = this.state;
        const { dispatch } = this.props;

        if(type == '1') {
            dispatch({
                type: 'bibaDeatil/postOne',
                payload: {
                    article_id: id,
                    content,
                    user_phone: '15257741312'
                },
                callback: (data) => {
                    const { bibaDeatilOneBack, bibaDeatil } = this.props;
                    this.setState({
                        content: '',
                        showComment: false
                    });
                    if(bibaDeatilOneBack) {
                        bibaDeatilOneBack.push({
                            username: bibaDeatil && bibaDeatil.username || '无',
                            content,
                            addtime: parseInt((+new Date())/1000),
                            headimgurl: bibaDeatil && bibaDeatil.headimgurl || '',
                            id: data.id,
                            res2: []
                        })

                        dispatch({
                            type: 'bibaDeatil/updateComment',
                            payload: bibaDeatilOneBack
                        });
                    }
                }
            });
        }
        else if(type == '2') {
            dispatch({
                type: 'bibaDeatil/postTwo',
                payload: {
                    article_id: id,
                    pid,
                    content,
                    user_phone: '15257741312'
                },
                callback: () => {
                    const { bibaDeatilOneBack, bibaDeatil } = this.props;
                    this.setState({
                        content: '',
                        showComment: false
                    });
                    if(bibaDeatilOneBack) {
                        if(bibaDeatilOneBack[index] && bibaDeatilOneBack[index].res2) {
                            bibaDeatilOneBack[index].res2.push({
                                username: bibaDeatil && bibaDeatil.username || '无',
                                content,
                            })

                            dispatch({
                                type: 'bibaDeatil/updateComment',
                                payload: bibaDeatilOneBack
                            });
                        }
                    }
                }
            });
        }
    }

    render() {
        let {
            bibaDeatil,
            bibaDeatilOneBack,
            location
        } = this.props;

        let params = location.query;
        let phone;
        if (this.props.phone) {
            phone = this.props.phone;
        } else {
            phone = params.phone;
            this.props.dispatch({type: 'index/save', payload: {phone}})
        }

        return (
            <div className='mh-100 bg-f5'>
                <div className={style.detail_box}>
                    <div className={style.detail_info_box}>
                        <img src={ 'http://www.bitss.pro/static/userHeadImg/' + bibaDeatil.headimgurl } alt="sb" title="sb" />
                        <div className={style.detail_info}>
                            <div className={style.detail_name}>{ bibaDeatil.username }</div>
                            <div className={style.detail_label}>
                                <span>{ bibaDeatil.smbo_title }</span>
                                <span className={style.line}/>
                                <span>{ formate(parseFloat(bibaDeatil.addtime)) }</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.detail_content}>
                        { bibaDeatil.post_title }
                    </div>
                    <img className={`style.detail_img mb-8`} src={ bibaDeatil.post_img } alt="" />
                </div>

                <ul className={ `${ style.detail_tabs } mt-8` }>
                    <li onClick={ this.changeAllComment }>全部评论</li>
                    {/* <li onClick={ this.changeOnlyComment }>只看楼主</li> */}
                </ul>

                <div className='mt-8'>
                    {
                        bibaDeatilOneBack && bibaDeatilOneBack.length > 0 && bibaDeatilOneBack.map((v, index) => {
                            return (
                                <div className={style.detail_box} key={ v.id }>
                                    <div className={style.detail_info_box}>
                                        <img className={style.br_17} src={ 'http://www.bitss.pro/static/userHeadImg/' + v.headimgurl } alt="" />
                                        <div className={style.detail_info}>
                                            <div className={`${style.detail_name} mb-8`}>{ v.username }</div>
                                            <div className={style.detail_label}>
                                                {/* <span>以太坊吧</span> */}
                                                {/* <span className={style.line}></span> */}
                                                <span>{ formate(parseFloat(v.addtime)) }</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${ style.detail_content } mb-8`} dangerouslySetInnerHTML={{  __html: v.content  }}/>
                                    <div className={style.detail_imgs}>
                                        {
                                            v.img && v.img.split('**').map((k, t) => {
                                                return (<img key={ k+'_'+t } src={ k } alt="" />)
                                            })
                                        }
                                    </div>
                                    {/* <div className={style.comment_btns}>
                                        <button onClick={ () => this.handleSaySome('1', v.id)}>回复</button>
                                    </div> */}
                                    {
                                        v.res2 && v.res2.length > 0
                                            ? <React.Fragment>
                                                <div className={style.comment_list}>
                                                    {
                                                        v.res2 && v.res2.map((i,o) => {
                                                            return (
                                                                <div className={style.comment_box} key={ o }>
                                                                    <span className={style.comment_name}>{ i.username }:  </span>
                                                                    <span className={style.comment_dec}>{ i.content }</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                {/* <div className={style.comment_btns}>
                                                    <button onClick={ () => this.handleSaySome('2', v.id)}>回复</button>
                                                </div> */}
                                            </React.Fragment>
                                            : null
                                    }
                                    <div className={style.comment_btns}>
                                        <button onClick={ () => this.handleSaySome('2', v.id, index)}>回复</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="mt-8 bg-ff" onClick={ () => this.handleSaySome('1') }>
                    <CommentInput />
                </div>
                
                {
                    this.state.showComment ? 
                        <div className={`${ style.comment_input_box } bg-ff`}>
                            <div className={style.mask} onClick={ () => { this.setState({ showComment: false }) } }></div>
                            <div className={style.comment_title}>
                                <div className={style.cancel} onClick={ () => { this.setState({ showComment: false }) } }>取消</div>
                                <div className={style.ok} onClick={ () => this.postData() }>发布</div>
                            </div>
                            <TextareaItem
                                ref={ (el) => { this.TextareaItemRefs = el } }
                                placeholder="说点什么吧。。。"
                                labelNumber={5}
                                rows={4}
                                value={this.state.content}
                                onChange={ (val) => this.setState({ content: val }) }
                            />
                        </div> : null
                }
                
            </div>
        )
    }

    /**
     * 全部评论
    */
    changeAllComment = () => {
    }

    /**
     * 只看楼主的评论
    */
    changeOnlyComment = () => {
        alert(2)
    }
}

export default BiBaDetail;
