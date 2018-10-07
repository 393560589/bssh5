import React, { PureComponent } from 'react'
import styles from './index.less'
import {resultFix, resultFlow} from '../../services/search'
import router from 'umi/router'
import { connect } from 'dva';
import { ActivityIndicator } from 'antd-mobile'

@connect(({index}) => ({...index}))
class SearchResult extends PureComponent {
  constructor() {
    super()
    this.state = {
      app: '',
      baike: '',
      ba: '',
      post: '',
      news: '',
      hotWords: [],
      others: [],
      error: false,
      flowPage: 1,
      keyword: '',
      phone: '',
      totalPage: '',
      loading: false
    }
  }

  componentDidMount() {
    let {location: { query: { keyword, phone } }} = router;
    // let phone = query.phone;
    console.log(phone);
    if (phone === 'undefined' || phone === '' || phone === undefined) {
      if (window.history.length === 1) {
        console.log('length = 1');
        localStorage.setItem('bss_user_phone', phone);
      } else {
        phone = localStorage.getItem('bss_user_phone');
      }
    } else {
      console.log('set phone')
      localStorage.setItem('bss_user_phone', phone);
    }

    this.setState({keyword, phone})
    this.fetchResult(keyword)
    this.fetchFlowResult(keyword)
    window.postMessage(JSON.stringify({type: 'enter'}), '*')
  }

  componentWillUnmount() {
    window.postMessage(JSON.stringify({type: 'leave'}), '*')
  }

  fetchResult = async (keyword) => {
    const result = await resultFix({keyword})
    // const flowResult = await resultFlow({keyword, page})
    if (result === null || result === undefined) {
      // 搜索结果为空或请求出错
      this.setState({error: true})
    } else {
      const { baike, ba, news, about_post: post, hot_words: hotWords, app, hangqing } = result
      this.setState({baike, ba, news, post, hotWords, app, hangqing})
    }
  }

  fetchFlowResult = async (keyword) => {
    const {flowPage: page} = this.state
    const flowResult = await resultFlow({keyword, page})
    if (flowResult === null || flowResult === undefined) {
      // 搜索结果为空或请求出错
      // this.setState({error: true})
    } else {
      // const { baike, ba, news, about_post: post, hot_words: hotWords } = result
      this.setState({others: flowResult.news, totalPage: flowResult.count})
    }
  }

  goPrev = () => {
    const {keyword} = this.state
    // const {location: { query: { keyword } }} = router
    this.setState((prev => {
      if (prev.flowPage > 1) {
        return { flowPage: prev.flowPage - 1}
      }
    }))
    this.fetchFlowResult(keyword)
  }

  goNext = () => { //
    // const {location: { query: { keyword } }} = router
    const {keyword, totalPage} = this.state
    this.setState((prev => {
      if (prev.flowPage < totalPage) {
        return { flowPage: prev.flowPage + 1}
      }
    }))
    this.fetchFlowResult(keyword)
    window.scroll(0, 0)
  }

  search = (keyword) => {
    const { phone } = this.state;
    this.setState({keyword, flowPage: 1})
    router.push(`/SearchResult?keyword=${keyword}&phone=${phone}`)
    this.fetchResult(keyword)
    this.fetchFlowResult(keyword)
    window.scroll(0, 0)
  }

  renderPrice = () => {
    if (!this.state.hangqing) return null;
    const { currency, price, change, marketCap, vol } = this.state.hangqing;
    return (
      <section className="p-15">
        <section className={styles.top}>
          <span>1{currency}=</span>
          <p style={{fontSize: '.24rem'}}>{price}RMB</p>
        </section>
        <section className={styles.top}>
          <h4 style={{fontSize: '.12rem', marginBottom: '.2rem'}}>{change}USD</h4>
          <span style={{fontSize: '.15rem'}}>市值:${marketCap}<br/>全球交易量(24h):${vol}</span>
        </section>
      </section>
    )
  }

  renderBaiWiki = () => {
    const {article_title: title, article_img: img, article_description: content, id} = this.state.baike
    return (
      <section className="p-15 mb-8" onClick={() => router.push(`/BaiWiKi?id=${id}`)}>
        <h3>{title}</h3>
          <div className="ds-fs">
            <img src={`http://www.bitss.pro/static${img}`} alt="头像" className={styles.image}/>
            <p
              ref={v => this.p = v}
              dangerouslySetInnerHTML={{__html: content}}
              style={{maxHeight: '.6rem', lineHeight: '.2rem'}}
              className={styles.hiddenText}
              onClick={() => this.p.style.maxHeight = ''}
            />
          </div>
      </section>
    )
  }

  renderBa = () => {
    const {smbo_title: title, smbo_logo: logo, smbo_description: desc, post, id} = this.state.ba
    const { phone } = this.state;
    return (
      <section className="p-15 mb-8" onClick={() => router.push({pathname: '/BiBa', query: {id, phone}})}>
        <h3>{title}</h3>
        <div className="ds-fs mb-8">
          <img src={`/static/baupload/${logo}`} alt="" className={styles.image}/>
          <div>
            {post && post.map(p => <p key={p.id}>{p.post_title}</p>)}
          </div>
        </div>
        <span>{desc}</span>
      </section>
    )
  }

  renderApp = () => {
    const { img, title, description, url } = this.state.app
    return (
      <section>
        <section>
          <img src={img} alt="app logo"/>
          <section>
            <h3>{title}</h3>
            {/* <span>行情资讯</span> */}
          </section>
        </section>
        <p>{description}</p>
        <a href={url} className={styles.downloadBtn}>立即下载</a>
      </section>
    )
  }

  renderPost = () => {
    return (
      <section className="p-15 mb-8">
        <h3>关于<b className={'_high'}>{this.state.keyword}</b>的帖子</h3>
        {this.state.post && this.state.post.map(p => <p className="mb-8" key={p.id}>{`${p.post_title}[${p.board_title}]`}</p>)}
        {/* <p className="mb-8">7月31日BTC、EOS交易策略【比特币吧</p>
        <p>爆炒区块链3.0概念，EOS想超ETH (以太坊)，没那么简单!【以太坊吧】</p> */}
      </section>
    )
  }

  renderNews = () => {
    const { news } = this.state
    return (
      <section className="p-15 mb-8">
        <h3>近期关于<b className={'_high'}>{this.state.keyword}</b>的相关新闻</h3>
        {news && news.map(n => <p className={styles.newsLink} key={n.title} onClick={(e) => { e.preventDefault();this.setState({loading: true}, function() {window.location.href=n.url})}}><a href={n.url}>{n.title}</a></p>)}
      </section>
    )
  }

  renderOther = ({title, description, url, id}) => {
    let html = `<b class="_high">${this.state.keyword}</b>`;
    let key = new RegExp(this.state.keyword,'igm')
    title = title.replace(key, html);
    description = description.replace(key, html);
    //this.setState({loading: true}, function() {window.location.href=url});
    return (
      <section key={id} className="p-15 mb-8" onClick={() => { window.postMessage(JSON.stringify({type: 'WebViews', url}), '*') }}>
        <h3 dangerouslySetInnerHTML={{__html:title}} />
        <p className="mb-8" dangerouslySetInnerHTML={{__html:description}}/>
        <a className={styles.link}>查看更多</a>
      </section>
    )
  }

  renderHots = () => {
    const { hotWords = [] } = this.state
    const left = hotWords.slice(0, 5)
    const right = hotWords.slice(5, 10)
    return (
      <section>
        <h2 className={styles["top-searchs"]}>搜索热点</h2>
        <div className="ds-fa pl-20">
          <ul>
            {left.map(item => <li key={item} onClick={() => this.search(item)}>{item}</li>)}
          </ul>
          <ul>
            {right.map(item => <li key={item} onClick={() => this.search(item)}>{item}</li>)}
          </ul>
        </div>
      </section>
    )
  }

  renderPagination = () => {
    return (
      <section className="mt-8 ds-f p-8">
        <img src={require('../../assets/arrow-left.png')} alt="" className={styles.icon} onClick={this.goPrev}/>
        <span className={styles.page}>第 {this.state.flowPage} 页</span>
        <img src={require('../../assets/arrow-right.png')} alt="" className={styles.icon} onClick={this.goNext}/>
      </section>
    )
  }

  test = () => {
    window.postMessage('to app')
  }

  render() {
    const { baike, ba, app, post, news, others, flowPage } = this.state
    return (
      <div>
      { this.state.error
        ? (<div className={styles.empty}>
            <img src={require('../../assets/result/empty@2x.png')} alt=""/>
            <p>未找到{`"${router.location.query.keyword}"`}相关结果</p>
        </div>)
        : (<div className={styles.container}>
          {flowPage === 1 && this.renderPrice()}
          {flowPage === 1 && baike && this.renderBaiWiki()}
          {flowPage === 1 && ba && this.renderBa()}
          {flowPage === 1 && app && this.renderApp()}
          {flowPage === 1 && post && post.length > 0 && this.renderPost()}
          {flowPage === 1 && news && news.length > 0 && this.renderNews()}
          {others.map(item => this.renderOther(item))}
          {this.renderHots()}
          {this.renderPagination()}
        </div>)
      }
      <ActivityIndicator
        toast
        text="加载中..."
        animating={this.state.loading}
      />
      </div>
    )
  }
}

export default SearchResult
