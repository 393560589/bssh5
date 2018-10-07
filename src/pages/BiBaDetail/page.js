import React, { PureComponent } from 'react'
import { connect } from 'dva'
import style from './index.less'
import { CommentInput } from 'components'
import { formate } from '../../utils/date.js';

@connect(({bibaDeatil})=>({...bibaDeatil}))
class BiBaDetail extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        let {
            bibaDeatil,
            bibaDeatilOneBack
        } = this.props;

        return (
            <div className='mh-100 bg-f5'>
                <div className={style.detail_box}>
                    <div className={style.detail_info_box}>
                        <img src={ bibaDeatil.headimgurl } alt="sb" title="sb" />
                        <div className={style.detail_info}>
                            <div className={style.detail_name}>{ bibaDeatil.username }</div>
                            <div className={style.detail_label}>
                                <span>{ bibaDeatil.smbo_title }</span>
                                <span className={style.line}/>
                                <span>{ bibaDeatil.addtime }</span>
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
                                        <img className={style.br_17} src={ v.headimgurl } alt="" />
                                        <div className={style.detail_info}>
                                            <div className={`${style.detail_name} mb-8`}>{ v.username }</div>
                                            <div className={style.detail_label}>
                                                {/* <span>以太坊吧</span> */}
                                                {/* <span className={style.line}></span> */}
                                                <span>{ formate(parseFloat(v.addtime+'000')) }</span>
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
                                                    <button>回复</button>
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
