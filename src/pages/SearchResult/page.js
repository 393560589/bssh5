import React, { PureComponent } from 'react'
import styles from './index.less'

class SearchResult extends PureComponent {
  renderBaiWiki = () => {
    return (
      <section className="p-15 mb-8">
        <h3>柚子/Enterprise Operation System/<em>EOS</em>百科</h3>
          <div className="ds-fs">
            <img src={require('../../assets/image.png')} alt="" className={styles.image}/>
            <p>领导开发的类似操作系统的区块链架构平台，旨在实现分布式应用的性能扩展。EOS提供账户，身份验证...</p>
          </div>
      </section>
    )
  }

  renderBa = () => {
    return (
      <section className="p-15 mb-8">
        <h3>EOS吧</h3>
        <div className="ds-fs mb-8">
          <img src={require('../../assets/image.png')} alt="" className={styles.image}/>
          <span>asidhfisapd</span>
        </div>
        <span>EOS铁粉交流区，欢迎大佬们进驻！</span>
      </section>
    )
  }

  renderPost = () => {
    return (
      <section className="p-15 mb-8">
        <h3>关于EOS的帖子</h3>
        <p className="mb-8">7月31日BTC、EOS交易策略【比特币吧</p>
        <p>爆炒区块链3.0概念，EOS想超ETH (以太坊)，没那么简单!【以太坊吧】</p>
      </section>
    )
  }

  renderNews = () => {
    return (
      <section className="p-15 mb-8">
        <h3>近期关于eos的相关新闻</h3>
        <p className="mb-8">号称超越ETH、吊打EOS，技术流IOST的底气到底在哪里？</p>
        <p className="mb-8">白皮说 | EOS是下一代区块链的王者还是一个百亿美元的骗局?</p>
        <p className="mb-8">EOS相较比特币更去中心化？！| EOSLAOMAO · 宁话区块链 第6集 去中心化</p>
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

  renderTops = () => {
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

  render() {
    return (
      <div className={styles.container}>
        {this.renderBaiWiki()}
        {this.renderBa()}
        {this.renderPost()}
        {this.renderNews()}
        {this.renderOther()}
        {this.renderOther()}
        {this.renderOther()}
        {this.renderOther()}
        {this.renderTops()}
        {this.renderPagination()}
      </div>
    )
  }
}

export default SearchResult