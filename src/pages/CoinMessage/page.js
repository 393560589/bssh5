
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'dva'
import { Icon, PullToRefresh, Pagination } from 'antd-mobile'
import Link from 'umi/link'
import { Header, TimeTree } from 'components'

import style from './index.less'

const font12 = {
    fontSize: '.12rem'
};
const dsAj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

@connect(({coin})=>({...coin}))
class CoinMessage extends PureComponent {
    state = {
        refreshing: false,
        down: true,
        height: document.documentElement.clientHeight,

        panigation: {
            page: 1,
            len: 10
        },
        hasMore: true
    }

    componentWillUnmount(){
      //console.log('走掉')
      window.postMessage(JSON.stringify({type: 'leave'}), '*')
    }
<<<<<<< Updated upstream
    onShare(){
      window.postMessage(JSON.stringify({type: 'share'}), '*')
    }
=======

>>>>>>> Stashed changes
    componentDidMount(){
        const hei = this.state.height - 55;//ReactDOM.findDOMNode(this.ptr).offsetTop;
        window.postMessage(JSON.stringify({type: 'enter'}), '*')
        this.getCoinList();
        setTimeout(() => this.setState({
            height: hei,
        }), 0);

        // const wrapper = this.refs.wrapper;
        // const loadMoreData = this.loadMoreData;
        // let timer;

        // function callback() {
        //     const top = wrapper.getBoundingClientRect().top;
        //     const windowHeight = window.screen.height;
        //     console.log(top);

        //     if (top && top < windowHeight) {
        //       // 当 wrapper 已经被滚动到页面可视范围之内触发
        //       loadMoreData();
        //     }
        // }

        // window.addEventListener('scroll', function () {
        //     console.log('scroll');
        //     if (this.state.hasMore) {
        //         return;
        //     }

        //     timer && clearTimeout(timer);
        //     timer = setTimeout(callback, 50);
        // }.bind(this), false);
    }

    loadMoreData = () => {
        if(!this.state.hasMore){
            return;
        }
        this.getCoinList();
    }

    // 搜索币讯
    searchCoinList = (keyword) => {
        console.log(keyword);
    }

    // 获取币讯列表接口
    getCoinList(refreshing = false) {
        const that = this;
        const { dispatch } = that.props;
        const { panigation } = that.state

        if(refreshing) {
            dispatch({
                type: 'coin/getFirstCoinList',
                payload: {
                    ...panigation
                },
                callback: (data) => {
                    if(data && data.length >= panigation.len) {
                        that.setState({
                            pagination: {
                                ...panigation,
                                page: panigation.page++
                            }
                        });
                    }
                    else {
                        that.setState({
                            hasMore: false
                        });
                    }
                    this.setState({ refreshing: false });
                }
            });
            return;
        }

        dispatch({
            type: 'coin/getCoinList',
            payload: {
                ...panigation
            },
            callback: (data) => {
                if(data && data.length >= panigation.len) {
                    that.setState({
                        pagination: {
                            ...panigation,
                            page: panigation.page++
                        }
                    });
                }
                else {
                    that.setState({
                        hasMore: false
                    });
                }
            }
        });
    }

    render() {
        const that = this;
        const { coinList, hasMore, panigation } = that.props;
        console.log('test');

        return (
            <div>
                <Header handleSearch={this.searchCoinList} />
                <PullToRefresh
                    damping={60}
                    direction='down'
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={{
                        activate: <p style={dsAj}><Icon type="up" size="xs" /> <span style={font12}>松开以刷新</span></p>,
                        deactivate: <p style={dsAj}><Icon type="down" size="xs" /> <span style={font12}>下拉可刷新</span></p>,
                        release: <p style={dsAj}><Icon type="loading" color="#F29600" size="xs" /></p>,
                        finish: <p style={dsAj}><span style={font12}>刷新完成</span></p>
                    }}
                    onRefresh={() => {
                        this.setState({
                            refreshing: true,
                            panigation: {
                                len: 10,
                                page: 1
                            }
                        }, () => {
                            console.log(this.state.panigation);
                            this.getCoinList(true);
                        });

                    }}
                >
                    <div ref="content">
                        <div style={{height: '.1rem'}}/>
                        <TimeTree data={coinList} onShare={this.onShare}/>
                        <div className={style.loadMore} onClick={() => this.loadMoreData()}>{hasMore ? '加载更多' : '没有更多数据了'}加载更多</div>
                    </div>
                </PullToRefresh>
            </div>

        );
    }
}

export default CoinMessage;
