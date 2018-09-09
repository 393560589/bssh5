import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { HeaderBar, Expand, GradBox, GradList, CommentList } from 'components'
import style from './index.less'

class BaiWiki extends PureComponent {

    render() {
        return (
            <div className='mh-100 bg-f5'>
                <HeaderBar />

                <div className="mt-8">
                    <Expand />
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
                        <CommentList />
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiWiki;