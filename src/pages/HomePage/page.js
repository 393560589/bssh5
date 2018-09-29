import React, { PureComponent } from 'react';
import styles from './index.less';
import { Icon } from 'antd-mobile';
import handleTime from '../../utils/handleTime';
import { connect } from 'dva';

@connect(({ homePage }) => ({ ...homePage }))
class HomePage extends PureComponent {

    constructor (...args) {
        super(...args);
        this.state = {
            homePage_img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1193474556,1223904415&fm=27&gp=0.jpg",
            homePage_Background: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1193474556,1223904415&fm=27&gp=0.jpg",
            homePage_title: 'EOS区块链',
            headerState: 'ta还没有freestyle....',
            homePage_listData: [
                {
                    id: '1',
                    time: +new Date(),
                    list: [
                        {
                            title: '比特币',
                            content: '比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,'
                        },
                        {
                            title: '比特币',
                            content: '比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,'
                        },
                        {
                            title: '比特币',
                            content: '比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,'
                        },
                    ]
                },
                {
                    id: '2',
                    time: +new Date(),
                    list: [
                        {
                            title: '比特币',
                            content: '比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,'
                        },
                        {
                            title: '比特币',
                            content: '比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,'
                        },
                        {
                            title: '比特币',
                            content: '比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,比特币真好，比特币真牛逼,'
                        },
                    ]
                },
            ]
        }
    }

    componentDidMount() {
        const { dispatch, location } = this.props;

        let params = location.query;

        // 获取文章详情和列表
        dispatch({
            type: 'homePage/getHomePageUserInfo',
            payload: params
        })

        dispatch({
            type: 'homePage/getHomePageList',
            payload: params
        })
    }

    render () {
        const {
            homePage_Background,
            homePage_title,
            homePage_img,
            headerState,
            homePage_listData
        } = this.state;

        let {
            homePageUserInfo,
            homePageList
        } = this.props;

        // 每个列表模块
        const list = (v, i) => {
            return (
                <div className={ styles.homePage_list } key={ i }>
                    <p className={ styles.homePage_list_time }>
                        <span className={ styles.homePage_list_time_date }>{ handleTime( v.addtime )[1] ? handleTime( v.addtime )[1] : '' }</span>
                        <span className={ styles.homePage_list_time_month }>{ handleTime( v.addtime )[0] ? handleTime( v.addtime )[0] : ''}</span>
                    </p>
                    {/* {
                        v.list && v.list.length > 0 && v.list.map((k, i) => {
                            return listItem && listItem(k, i, (v.list.length - 1) !== i)
                        })
                    } */}
                    <div className={ true ? `${styles.homePage_list_detail} ${styles.border_bottom}` : `${styles.homePage_list_detail}` }>
                        <h6>{ v.smbo_title }</h6>
                        <p>{ v.post_title }</p>
                    </div>
                </div>
            )
        }

        const listItem = (k, i, flag) => {
            return (
                <div className={ flag ? `${styles.homePage_list_detail} ${styles.border_bottom}` : `${styles.homePage_list_detail}` } key={ i }>
                    <h6>{ k.title }</h6>
                    <p>{ k.content }</p>
                </div>
            )
        }


        return (<div className={ styles.homePageWrapper }>
            <header className={ styles.homePage_header }>
                <div className={ styles.homePage_header_top }  style={{ backgroundImage: `url(${homePage_Background})` }}>
                    <p className={ styles.homePage_header_title }>
                        <Icon className={ styles.homePage_header_title_icon } type="left" color="#FFF"/>
                        <span className={ styles.homePage_header_title_headline }>TA的主页</span>
                    </p>
                    <p className={ styles.homePage_header_theme }>{ homePageUserInfo.username }</p>
                    <img className={ styles.homePage_header_img } src={ homePageUserInfo.headimgurl }/>
                </div>
                <div className={ styles.homePage_header_bottom }>
                    <p className={ styles.homePage_header_bottom_overflow } style={{ webkitBoxOrient: "vertical" }}>
                        <span className={ styles.homePage_header_state }>简介:</span>
                        { headerState }
                    </p>
                </div>
            </header>
            <main className={ styles.homePage_listWrapper }>
                {
                    homePageList && homePageList.length > 0 && homePageList.map((v, i) => {
                        return list && list(v, i)
                    })
                }
            </main>
        </div>)
    }
};

export default HomePage;

// city: null
// headimgurl: "http://www.bitss.pro/static/userHeadImg/1533016942.jpeg"
// integral: 1188
// level: 1
// phone: "13736795421"
// province: null
// sex: 1
// sign: "未签到"
// username: "鲁鲁皮"