import React, { PureComponent } from 'react'
import { connect } from 'dva'
import style from './index.less'
import { CommentInput } from 'components'

class BiBaDetail extends PureComponent {

    render() {
        return (
            <div className='mh-100 bg-f5'>
                <div className={style.detail_box}>
                    <div className={style.detail_info_box}>
                        <img src={require('../../assets/yay.jpg')} alt="" />
                        <div className={style.detail_info}>
                            <div className={style.detail_name}>王牌出击</div>
                            <div className={style.detail_label}>
                                <span>以太坊吧</span>
                                <span className={style.line}></span>
                                <span>2018-8-31</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.detail_content}>
                        股吧访谈之首席投资人:进入国际的A股，新起点量变质一定会变
                    </div>
                    <img className={style.detail_img} src={require("../../assets/yay.jpg")} alt="" />
                </div>

                <div className='mt-8'>
                    <div className={style.detail_box}>
                        <div className={style.detail_info_box}>
                            <img className={style.br_17} src={require('../../assets/yay.jpg')} alt="" />
                            <div className={style.detail_info}>
                                <div className={style.detail_name}>王牌出击</div>
                                <div className={style.detail_label}>
                                    <span>以太坊吧</span>
                                    <span className={style.line}></span>
                                    <span>2018-8-31</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.detail_content}>
                            股吧访谈之首席投资人:进入国际的A股，新起点量变质一定会变
                        </div>
                        <div className={style.detail_imgs}>
                            <img src={require('../../assets/yay.jpg')} alt="" />
                            <img src={require('../../assets/yay.jpg')} alt="" />
                            <img src={require('../../assets/yay.jpg')} alt="" />
                            <img src={require('../../assets/yay.jpg')} alt="" />
                        </div>
                        <div className={style.comment_list}>
                            <div className={style.comment_box}>
                                <span className={style.comment_name}>九世长伴不辞：</span>
                                <span className={style.comment_dec}>进入国际的A股，新起点量变质一定会变</span>
                            </div>
                            <div className={style.comment_box}>
                                <span className={style.comment_name}>九世长伴不辞：</span>
                                <span className={style.comment_dec}>进入国际的A股，新起点量变质一定会变</span>
                            </div>
                        </div>
                        <div className={style.comment_btns}>
                            <button>回复</button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-ff">
                    <CommentInput />
                </div>
            </div>
        )
    }
}

export default BiBaDetail;