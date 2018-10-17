import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { HeaderBar, Expand, GradBox, GradList, CommentList } from 'components'
import { ActivityIndicator } from 'antd-mobile'
import style from './index.less'
import router from 'umi/router'

/**
 * 公司、钱包、交易所、媒体一样
 * 普通是一个介绍和说明
 */
const titles = ['', '普通', '项目介绍', '人物介绍', '公司介绍', '钱包介绍', '交易所介绍', '资本介绍', '媒体介绍'];

@connect(({wiki})=>({...wiki}))
class BaiWiki extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        const {location: { query: {id} }} = router
        const { dispatch } = this.props;

        dispatch({
            type: 'wiki/getWikiDetail',
            payload: {
                id
            }
        })

    }

    handleClick = () => {
        this.setState({
            loading: true
        });
    }

    render() {
        const { baiWikiDetail } = this.props;
        const cont_type = baiWikiDetail && baiWikiDetail.baike && baiWikiDetail.baike.cont_type || '0';

        return (
            <div className='mh-100 bg-f5'>
                <HeaderBar data={baiWikiDetail && baiWikiDetail.baike} />

                <div className="mt-8">
                    <Expand
                        type={ cont_type }
                        title={ titles[cont_type] }
                        officel={baiWikiDetail && baiWikiDetail.baike && baiWikiDetail.baike.official_network}
                        whitePage={baiWikiDetail && baiWikiDetail.baike && baiWikiDetail.baike.white_paper}
                        data={baiWikiDetail && baiWikiDetail.baike && baiWikiDetail.baike.article_description || ''} />
                </div>

                {
                    cont_type === 3 ?
                      baiWikiDetail && baiWikiDetail.baike && baiWikiDetail.baike.article_content &&(<div className="mt-8">
                                        <Expand type={0} title={'人物事迹'} data={ baiWikiDetail.baike.article_content || ''} />
                                    </div>) : null
                }

                {/* <div className="mt-8 bg-ff">
                    <div className={style.title}>团队介绍</div>
                    <div className={style.scroll_box}>
                        <GradBox />
                    </div>
                </div>

                <div className="mt-8 bg-ff">
                    <div className={style.title}>团队介绍</div>
                    <div className={style.scroll_box}>
                        <GradList />
                    </div>
                </div> */}
              {
                baiWikiDetail.news &&  baiWikiDetail.news.length>0 && (
                  <div className="mt-8 bg-ff">
                    <div className={style.title}>相关新闻</div>
                    <div className={style.scroll_box}>
                      <CommentList data={baiWikiDetail.news} handleClick={ this.handleClick } />
                    </div>
                  </div>
                )
              }


                <ActivityIndicator
                    toast
                    text="加载中..."
                    animating={this.state.loading}
                />
            </div>
        );
    }
}

export default BaiWiki;
