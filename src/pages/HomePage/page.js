import React, { PureComponent } from 'react';
import styles from './index.less';
import { Icon } from 'antd-mobile';
import { handleTime } from '../../utils/functions';


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

    render () {
        const {
            homePage_Background,
            homePage_title,
            homePage_img,
            headerState,
            homePage_listData
        } = this.state;

        // 每个列表模块
        const list = (v) => {
            return (
                <div className={ styles.homePage_list } key={ v.id }>
                    <p className={ styles.homePage_list_time }>
                        {/* <span className={ styles.homePage_list_time_date }>{ handleTime( v.time )[1] }</span>
                        <span className={ styles.homePage_list_time_month }>{ handleTime( v.time )[0] }</span> */}
                    </p>
                    {
                        v.list && v.list.length > 0 && v.list.map((k, i) => {
                            return listItem && listItem(k, i, (v.list.length - 1) !== i)
                        })
                    }
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
                    <p className={ styles.homePage_header_theme }>{ homePage_title }</p>
                    <img className={ styles.homePage_header_img } src={ homePage_img }/>
                </div>
                <p className={ styles.homePage_header_bottom }>
                    <p className={ styles.homePage_header_bottom_overflow } style={{ webkitBoxOrient: "vertical" }}>
                        <span className={ styles.homePage_header_state }>简介:</span>
                        { headerState }
                    </p>
                </p>
            </header>
            <main className={ styles.homePage_listWrapper }>
                {
                    homePage_listData && homePage_listData.length > 0 && homePage_listData.map(v => {
                        return list && list(v)
                    })
                }
            </main>
        </div>)
    }
};

export default HomePage;