import React, { PureComponent } from 'react'
import styles from './index.less'

class BiBa extends PureComponent {
  renderPost = () => {
    return (
      <section className={styles.post}>
        <div className={styles.top}>
          <img src={require('../../assets/avatar.png')} alt=""/>
          <div>
            <h4>王牌出击</h4>
            <span>2018-8-31</span>
          </div>
        </div>
        <p>股吧访谈之首席投资人:进入国际的A股，新起点量变质一定会变，股吧访谈之首席投资人:进入国际的A股，新起点量变质一定会变</p>
      </section>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={require('../../assets/bar-icon.png')} alt=""/>
          <div>
            <h3>以太坊吧</h3>
            <span>关注12.4w   帖子84.9w</span>
          </div>
        </div>
        {this.renderPost()}
        {this.renderPost()}
        {this.renderPost()}
        {this.renderPost()}
        {this.renderPost()}
        {this.renderPost()}
        {this.renderPost()}
        <span className={styles["add-icon"]}></span>
      </div>
    )
  }
}

export default BiBa
