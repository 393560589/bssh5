import React, { PureComponent } from 'react'
import style from './Index.less'
import Title from './Title';
import SecTitle from './SecTitle';
import Content from './Content';

class TimeTree extends PureComponent {

    render() {
        return(
            <div className={style.time_box}>
                <Title title="今天 8月25日 星期六"/>
                <SecTitle title="8月25日 18:30"/>
                <Content title="消息称比特大陆下周港交所交表 目标估值300亿美元" content="据自媒体“IPO早知道”消息，比特大陆将于下周在
港交所交表，正式启动上市流程。本次IPO的主承
销商为中金，上市目标估值为300亿美元。 " />
                <SecTitle title="8月25日 18:30"/>
                <Content title="BTC持续拉升创日内新高达6746美元" content="BTC从今日凌晨开始持续拉升，刚刚创日内新高达
6746美元，火币现报6717美元，涨幅3.28%。" />
            </div>
        )
    }
}

export default TimeTree;
