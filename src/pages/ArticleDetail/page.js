import React, { PureComponent } from 'react'
import { connect } from 'dva'
import style from './index.less'
import { ListGroup } from 'components'

class ArticleDetail extends PureComponent {

    render() {
        return (
            <div className='mh-100 bg-f5'>
                <div className={style.title}>无论你来不来，我们都在这儿等你</div>
                
                <TitleBar />

                <div className={style.detail}>
                    很多人说比特币是传销，区块链是诈骗。
                    但我们看到的是一场变革。

                    很多人说比特币是泡沫，区块链空有概念。
                    但我们看到的是一个机会。
                    从2017年的酝酿到2018年的爆发，区块链在短短一
                    年时间，成为了搅动社会金融体系的新兴力量，成为
                    逐利者的新天地.是变革还是诈骗？是机会还是泡沫？
                    回归区块链本质说区块链，全面剖析这股神秘力量。

                    由链向财经主办的“价值回归”区块链分享会将在
                    2018年8月18日14点在南山软件产业基地召开。

                    这一次我们拒绝无价值的信息输出；拒绝泛泛而谈的
                    空洞分享；拒绝华而不实的宣传语言、拒绝名不符实
                    的推广。来一场真真正正的区块链价值讨论，深圳区
                    块链业内知名项目分享、圈内投资大咖手把手传授投
                    资技巧，与大咖零距离接触！无论您是区块链爱好者
                    或者是小白，在各种区块链不断出现让人眼花缭乱、
                    各种投资区块链鱼龙混杂的今天，链向财经希望能帮
                    助您化解看似高深的区块链技术，低门槛的读懂区块
                    链未来。

                    活动现场除了有知名项目、圈内投资大咖、区块链项
                    目资深投资者和区块链普及使者与您分享区块链知识
                    和进入币圈的心得外，还有点心茶水、丰厚礼品和有
                    趣小互动等着您喔！
                </div>

                <div className="mt-8 bg-ff">
                    <ListGroup />
                </div>

            </div>
        );
    }
}

const TitleBar = () => {

    return (
        <div className={style.title_bar}>
            <div className={style.title_label}>来源：链向财经</div>
            <div className={style.title_label}>时间：2018-8-15</div>
            <div className={style.title_label}>阅读：984</div>
        </div>
    )
}

export default ArticleDetail;