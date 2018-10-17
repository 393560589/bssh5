import React, { PureComponent } from 'react';
import styles from './index.less';
import { Icon } from 'antd-mobile';
import xuqiu from '../../assets/businessCard/xuqiu.png';
import yewu from '../../assets/businessCard/yewu.png';
import { connect } from 'dva';
import router from 'umi/router';

@connect(({businessCard})=>({...businessCard}))
class BusinessCard extends PureComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            headPortrait: '',
            cardName: '',
            cardIntroduce: '',
            cardErweimaUrl: '',
            cardLineOfBusiness: '',
            cardDemand: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        let dataSource = nextProps.businessCard;
        if (dataSource instanceof Object) {
            this.setState({
                cardName: dataSource.article_title,
                headPortrait: dataSource.article_img,
                cardIntroduce: dataSource.card_desc,
                cardLineOfBusiness: dataSource.card_scope,
                cardDemand: dataSource.card_demand,
            })
        }
    }

    render () {
        console.log(this.props)
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
                    <Icon className={ styles.BusinessCard_title_icon } onClick={() => { router.goBack() }} type="left" color="#fff"/>
                    <span>名片</span>
                    <Icon onClick={ this.shareCard } className={ styles.BusinessCard_title_icon } type="ellipsis" color="#333333"/>
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
                        {/* <p className={ styles.BusinessCard_title_main_erweima }>
                            <img className={ styles.BusinessCard_title_main_erweima_img } src={ cardErweimaUrl }/>
                            <span>联系专员</span>
                        </p> */}
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
                                <p>{ cardDemand }</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    shareCard = () => {
        // 将这个id传给RN
        let query = this.props.location.query;

        window.postMessage(JSON.stringify({type: 'share',data:`https://bitss.pro/static/img/index/shichang-erweima.jpg`}), '*');
    }
}

export default BusinessCard;
