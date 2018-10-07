
import React, { PureComponent } from 'react'
import { connect } from 'dva'
//import { Drawer } from 'antd-mobile';
import {formatData, getQueryString} from '../../utils/functions'
import style from './index.less'
import router from "umi/router";

@connect(({coin})=>({...coin}))
class CoinMessageShare extends PureComponent {
    state = {
    }

    componentDidMount(){
        this.getCoinDetail();
    }

    getCoinDetail = () => {
        // 获取币讯列表接口
        const that = this;
        const { dispatch } = that.props;
        getQueryString('id') &&
        dispatch({
            type: 'coin/getCoinDetail',
            payload: {
                id: getQueryString('id')
            }
        })
    }
    share(){
      window.postMessage(JSON.stringify({type: 'share',data:window.location.href}), '*')
    }
    renderRange = (range) => {
        let length = parseInt(range, 10);
        let data = [];

        for(let i = 0; i < length; i++) {
            data.push(<img key={i} style={{ marginRight: '.05rem' }} src={require('../../assets/coin/star.png')} alt="" />)
        }

        return data;
    }

    render() {
        const that = this;
        const { coinDetail } = that.props;

        return (
            <div className={style.share_wrapper}>
              <div className={'ds-fa pl-28 pr-28'} style={{
                justifyContent:"space-between",
                backgroundColor:'#fff',
                height:'.44rem',
                position:'fixed',
                top:'0',
                width:'100vw'
              }}>
                <p onClick={()=>router.push('/CoinMessage')} style={{fontSize:'.14rem',color:'#666'}}>返回</p>
                <p style={{fontSize:'.16rem',color:'#222'}}>币讯详情</p>
                <p style={{fontSize:'.14rem',color:'#666'}} onClick={()=>this.share()}>分享</p>
              </div>
              <div style={{height:'.44rem'}}/>
              <div style={{flex:1}}>
                <div className={style.share_top}>

                  <img src={require('../../assets/coin/banner.png')} alt="" />
                  <div className={style.share_detail}>
                    {/* <div className={style.share_detail_title}>{ coinDetail. }</div> */}
                    <div className={ style.share_detail_time}>{ coinDetail && formatData(parseFloat(coinDetail.created_at)) }</div>
                    <div className={style.share_detail_content}>{ coinDetail && coinDetail.content }</div>
                  </div>
                </div>
                <div className={style.share_bottom}>
                  <div className={style.share_detail_range}>
                    重要程度：
                    { coinDetail && coinDetail.grade && that.renderRange(coinDetail.grade) }
                  </div>
                 {/* <div style={{fontSize:'.14rem',color:'#666'}} onClick={()=>this.share()}>
                    分享
                  </div>*/}
                </div>

              </div>

              <div className={style.share_detail_img}>
                <img src={require('../../assets/yay.jpg')} alt="" />
              </div>
               {/* <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    enableDragHandle
                    position="bottom"
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={<ShareBox />}
                    open={this.state.open}
                    onOpenChange={this.onOpenChange}
                >
                    分享
                </Drawer>*/}
            </div>
        );
    }
}

const ShareBox = () => {
    return (
        <div className={style.share_box}>
            <div className={style.share_icon}>
                <div className={style.share_icon_box}>
                    <img className={style.img1} src={require('../../assets/coin/wechat.png')} alt='' />
                    <span>微信</span>
                </div>
                <div className={style.share_icon_box}>
                    <img className={style.img2} src={require('../../assets/coin/friend.png')} alt='' />
                    <span>朋友圈</span>
                </div>
                <div className={style.share_icon_box}>
                    <img className={style.img3} src={require('../../assets/coin/weibo.png')} alt='' />
                    <span>微博</span>
                </div>
            </div>
            <div className={style.share_cancel}>取消</div>
        </div>
    )
}

export default CoinMessageShare;
