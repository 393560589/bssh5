import React, { PureComponent } from 'react'
import { ListView } from 'antd-mobile'
import style from './Index.less'
import Title from './Title';
import SecTitle from './SecTitle';
import Content from './Content';
import { formatData, isQuentDay } from 'utils/functions'
//import Link from 'umi/link';
import router from 'umi/router'
import Share from './Share'

let currentTime = '';



const TimeTree = (props) => {
    const { data, onShare, current, handleChangeCurrent } = props;

    return(
        <div className={style.time_box}>
            {/* <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderHeader={() => <span>header</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                                    </div>)}
                renderRow={row}
                pageSize={4}
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            /> */}
            {
                !(currentTime = '') && data && data.map((item, index) => {
                    if(index !== 0) {
                        currentTime = data[index - 1].created_at * 1000;
                    }
                    let week = isQuentDay(parseInt(parseInt(item.created_at) * 1000), parseInt(currentTime));
                    return(
                        <div key={item.id} style={{marginTop:'10px'}}>
                            <div>
                                { week ? <Title title={ week }/> : "" }
                                <div onClick={()=>{
                                //   router.push(`/CoinMessageShare?id=${item.id}`)
                                }}>

                                  <SecTitle title={formatData(parseInt(item.created_at))}/>
                                  <Content title={item.title} index={index} handleChangeCurrent={handleChangeCurrent} content={(current !== index && item.content.length > 100) ? (item.content.substr(0, 100) + '...') : item.content} />
                                </div>
                                <Share onShare={()=>{
                                    window.postMessage(JSON.stringify({type: 'share',data:item}), '*')
                                }} id={item.id} {...props} />
                            </div>
                        </div>
                    )
                })
            }
            {/* <Title title="今天 8月25日 星期六"/>
            <SecTitle title="8月25日 18:30"/>
            <Content title="消息称比特大陆下周港交所交表 目标估值300亿美元" content="据自媒体“IPO早知道”消息，比特大陆将于下周在
港交所交表，正式启动上市流程。本次IPO的主承
销商为中金，上市目标估值为300亿美元。 " /> */}
        </div>
    )
}

TimeTree.defaultProps = {
    data: []
};

export default TimeTree;
