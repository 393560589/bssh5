import React, { PureComponent } from 'react'
import styles from './index.less'
import router from 'umi/router'
import { connect } from 'dva';
import { formate } from '../../utils/date';


@connect(({biba, loading}) => ({...biba, loading}))
class BiBa extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props
    const {location: { query: id }} = router
    console.log(router)
    dispatch({
      type: 'biba/fetchBarInfo',
      payload: {
        id: 8//
      }
    })
  }

  renderPost = ({id, headimgurl, username, post_title, addtime}) => {
    return (
      <section className={styles.post} key={id} onClick={() => router.replace(`/BiBa?id=8&len=15&page=2`)}>
        <div className={styles.top}>
          <img src={headimgurl} alt=""/>
          <div>
            <h4>{username}</h4>
            <span>{formate(addtime)}</span>
          </div>
        </div>
        <p>{post_title}</p>
      </section>
    )
  }

  render() {
    const {smbo_title, attention, article_num, smbo_logo} = this.props.barInfo
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={smbo_logo} alt=""/>
          <div>
            <h3>{smbo_title}</h3>
            <span>关注{attention}   帖子{article_num}</span>
          </div>
        </div>
        {this.props.articleList.map(post => this.renderPost(post))}
        <span className={styles["add-icon"]}></span>
      </div>
    )
  }
}

export default BiBa
