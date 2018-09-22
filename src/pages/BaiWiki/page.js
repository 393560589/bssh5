import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { HeaderBar, Expand, GradBox, GradList, CommentList } from 'components'
import style from './index.less'
import router from 'umi/router'

const titles = ['', '', '', '人物介绍', '', '钱包介绍', '交易所介绍', '资本介绍', '媒体介绍'];

@connect(({wiki})=>({...wiki}))
class BaiWiki extends PureComponent {

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

    render() {
        const { baiWikiDetail } = this.props;
        const cont_type = baiWikiDetail && baiWikiDetail.baike && baiWikiDetail.baike.cont_type || '0';

        return (
            <div className='mh-100 bg-f5'>
                <HeaderBar data={baiWikiDetail && baiWikiDetail.baike} />

                {
                    cont_type === 1 ? <div className="mt-8">
                                        <Expand title={titles[cont_type]} data={baiWikiDetail && baiWikiDetail.baike} />
                                    </div> : null
                }

                <div className="mt-8">
                    <Expand title="" data={baiWikiDetail && baiWikiDetail.baike} />
                </div>

                <div className="mt-8">
                    <Expand title="" data={baiWikiDetail && baiWikiDetail.baike} />
                </div>

                <div className="mt-8 bg-ff">
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
                </div>

                <div className="mt-8 bg-ff">
                    <div className={style.title}>相关新闻</div>
                    <div className={style.scroll_box}>
                        <CommentList data={baiWikiDetail.news} />
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiWiki;