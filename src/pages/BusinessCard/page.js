import React, { PureComponent } from 'react';
import styles from './index.less';
import { Icon } from 'antd-mobile';
import xuqiu from '../../assets/businessCard/xuqiu.png';
import yewu from '../../assets/businessCard/yewu.png';

class BusinessCard extends PureComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            headPortrait: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1768770686,623173162&fm=27&gp=0.jpg',
            cardName: '何一',
            cardIntroduce: '币安交易所CMO、联合创始人',
            cardErweimaUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1768770686,623173162&fm=27&gp=0.jpg',
            cardLineOfBusiness: '区块链，币安交易所，比特币，区块链，币安交易所',
            cardDemand: '区块链，币安交易所，比特币，区块链，币安交易所',
        }
    }

    render () {

        const {
            headPortrait,
            cardName,
            cardIntroduce,
            cardErweimaUrl,
            cardLineOfBusiness,
            cardDemand
        } = this.state;

        return (
            <div className={ styles.BusinessCardWrappper }>
                <header className={ styles.BusinessCard_title }>
                    <Icon className={ styles.BusinessCard_title_icon } type="left" color="#333333"/>
                    <span>名片</span>
                    <Icon className={ styles.BusinessCard_title_icon } type="ellipsis" color="#333333"/>
                </header>
                <main className={ styles.BusinessCard_title_main }>
                    <div className={ styles.BusinessCard_title_main_info }>
                        <div className={ styles.BusinessCard_title_main_info_box }>
                            <img className={ styles.BusinessCard_title_main_info_img } src={ headPortrait }/>
                            <div className={ styles.BusinessCard_title_main_name }>
                                <h5>{ cardName }</h5>
                                <p>{ cardIntroduce }</p>
                            </div>
                        </div>
                        <p className={ styles.BusinessCard_title_main_erweima }>
                            <img className={ styles.BusinessCard_title_main_erweima_img } src={ cardErweimaUrl }/>
                            <span>联系专员</span>
                        </p>
                    </div>
                    <div className={ styles.BusinessCard_recommend }>
                        <div className={ styles.BusinessCard_recommend_list }>
                            <img src={ yewu } />
                            <p className={ styles.borderBg }>|</p>
                            <div className={ styles.BusinessCard_recommend_list_desc }>
                                <h6>业务范围</h6>
                                <p>{ cardLineOfBusiness }</p>
                            </div>
                        </div>
                        <div className={ styles.BusinessCard_recommend_list }>
                            <img src={ xuqiu } />
                            <p className={ styles.borderBg }>|</p>
                            <div className={ styles.BusinessCard_recommend_list_desc }>
                                <h6>业务需求</h6>
                                <p>{ cardLineOfBusiness }</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default BusinessCard;