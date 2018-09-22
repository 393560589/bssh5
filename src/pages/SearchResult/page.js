import React, { PureComponent } from 'react'
import styles from './index.less'
import resultApi from '../../services/search'
import router from 'umi/router'

class SearchResult extends PureComponent {
  constructor() {
    super()
    this.state = {
      baike: '',
      ba: '',
      post: '',
      news: '',
      hotWords: '',
      error: false
    }
  }

  componentDidMount() {
    const {location: { query: keyword }} = router
    this.fetchResult(keyword)
  }

  fetchResult = async (keyword) => {
    const result = await resultApi({keyword})
    console.log(result)
    if (result === null || result === undefined) {
      // 搜索结果为空或请求出错
      this.setState({error: true})
    } else {
      const { baike, ba, news, about_post: post, hot_words: hotWords } = result
      this.setState({baike, ba, news, post, hotWords})
    }
  }

  renderPrice = () => {
    return (
      <section className="p-15">
        <section className={styles.top}>
          <span>1EOS=</span>
          <p style={{fontSize: '.24rem'}}>4.93USD</p>
        </section>
        <section className={styles.top}>
          <h4 style={{fontSize: '.12rem', marginBottom: '.2rem'}}>-0.0986USD(-2.0%)</h4>
          <span style={{fontSize: '.15rem'}}>市值:$44.68亿<br/>全球交易量(24h):$5.34亿</span>
        </section>
      </section>
    )
  }

  renderBaiWiki = () => {
    const {article_title: title, article_img: img, article_description: content} = this.state.baike
    return (
      <section className="p-15 mb-8">
        <h3>{title}</h3>
          <div className="ds-fs">
            <img src={img} alt="" className={styles.image}/>
            <p
              ref={v => this.p = v}
              dangerouslySetInnerHTML={{__html: content}}
              style={{maxHeight: '.6rem'}}
              className={styles.hiddenText}
              onClick={() => this.p.style.maxHeight = ''}
            />
          </div>
      </section>
    )
  }

  renderBa = () => {
    const {smbo_title: title, smbo_logo: logo, smbo_description: desc, post} = this.state.ba
    return (
      <section className="p-15 mb-8">
        <h3>{title}</h3>
        <div className="ds-fs mb-8">
          <img src={logo} alt="" className={styles.image}/>
          <div>
            {post && post.map(p => <p key={p.id}>{p.post_title}</p>)}
          </div>
        </div>
        <span>{desc}</span>
      </section>
    )
  }

  renderApp = () => {
    return (
      <section>
        <section>
          <img src="" alt=""/>
          <section>
            <h3>币安</h3>
            <span>行情资讯</span>
          </section>
        </section>
        <p>简介：萨帝就不附带身边发生的手机封闭 u 吧</p>
        <a href="" className={styles.downloadBtn}>立即下载</a>
      </section>
    )
  }

  renderPost = () => {
    return (
      <section className="p-15 mb-8">
        <h3>关于EOS的帖子</h3>
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
        <h3>近期关于eos的相关新闻</h3>
        {news && news.map(n => <p className="mb-8" key={n.title}><a href={n.url}>{n.title}</a></p>)}
        {/* <p className="mb-8">号称超越ETH、吊打EOS，技术流IOST的底气到底在哪里？</p>
        <p className="mb-8">白皮说 | EOS是下一代区块链的王者还是一个百亿美元的骗局?</p>
        <p className="mb-8">EOS相较比特币更去中心化？！| EOSLAOMAO · 宁话区块链 第6集 去中心化</p> */}
      </section>
    )
  }

  renderOther = () => {
    return (
      <section className="p-15 mb-8">
        <h3>EOS合约新闻 EOS合约动态 EOS合约投资资讯-财链社</h3>
        <p className="mb-8">投资家全方位为您提供EOS合约相关新闻资讯，全面解读EOS合约投资、融资、并购等动态。</p>
        <a href="" className={styles.link}>查看更多</a>
      </section>
    )
  }

  renderHots = () => {
    return (
      <section>
        <h2 className={styles["top-searchs"]}>搜索热点</h2>
        <div className="ds-fa pl-20">
          <ul>
            <li>比<em>特币</em></li>
            <li>eos</li>
            <li>比特币</li>
            <li>eos</li>
            <li>比特币</li>
          </ul>
          <ul>
            <li>比特币</li>
            <li>eos</li>
            <li>比特币</li>
            <li>eos</li>
            <li>比特币</li>
          </ul>
        </div>
      </section>
    )
  }

  renderPagination = () => {
    return (
      <section className="mt-8 ds-f p-8">
        <img src={require('../../assets/arrow-left.png')} alt="" className={styles.icon}/>
        <span className={styles.page}>第 1 页</span>
        <img src={require('../../assets/arrow-right.png')} alt="" className={styles.icon}/>
      </section>
    )
  }

  test = () => {
    window.postMessage('to app')
  }

  render() {
    return (
      this.state.error
        ? (<div className={styles.empty} onClick={this.test}>
            <img src={require('../../assets/result/empty@2x.png')} alt=""/>
            <p>未找到{`"${router.location.query.keyword}"`}相关结果</p>
        </div>)
        : (<div className={styles.container}>
          {this.renderPrice()}
          {this.renderBaiWiki()}
          {this.renderBa()}
          {/* {this.renderApp()} */}
          {this.renderPost()}
          {this.renderNews()}
          {this.renderOther()}
          {this.renderOther()}
          {this.renderOther()}
          {this.renderOther()}
          {this.renderHots()}
          {this.renderPagination()}
        </div>)
      
    )
  }
}

export default SearchResult