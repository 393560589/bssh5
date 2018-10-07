import React, { PureComponent } from 'react'
import { connect } from 'dva'
import style from './index.less'
import { CommentInput } from 'components'
import formate from '../../utils/date.js'
import { TextareaItem } from 'antd-mobile'

@connect(({bibaDeatil, index})=>({...bibaDeatil, ...index}))
class BiBaDetail extends PureComponent {
    

    render() {
        let {
            bibaDeatil,
            bibaDeatilOneBack,
            location
        } = this.props;

        let params = location.query;
        let phone = params.phone;
        if (phone === 'undefined' || phone === undefined || phone === '') {
            phone = localStorage.getItem('bss_user_phone');
        } else {
            localStorage.setItem('bss_user_phone', phone);
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
                        bibaDeatilOneBack && bibaDeatilOneBack.length > 0 && bibaDeatilOneBack.map(v => {
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
                                                <div className={style.comment_btns}>
                                                    <button onClick={ () => { alert(JSON.stringify(phone)) }}>回复</button>
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <div className="mt-8 bg-ff">
                    <CommentInput />
                </div>

                <div className={`${ style.comment_input_box } bg-ff`}>
                    <div className={style.comment_title}>
                        <div className={style.cancel}>取消</div>
                        <div className={style.ok}>发布</div>
                    </div>
                    <TextareaItem
                        placeholder="说点什么吧。。。"
                        labelNumber={5}
                        rows={4}
                    />
                </div>
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
