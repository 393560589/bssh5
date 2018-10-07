import React, { PureComponent } from 'react'
import styles from './index.less'
import router from 'umi/router'
import { connect } from 'dva';
import formate from '../../utils/date';


@connect(({biba, loading}) => ({...biba, loading}))
class BiBa extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props
    const { location: { query } } = router
    dispatch({type: 'biba/fetchList', payload: query})
    dispatch({type: 'biba/fetchBarInfo', payload: query})
  }

  post = () => {
    const { id, smbo_title } = this.props.barInfo
    window.postMessage(JSON.stringify({type: 'post', id, title: smbo_title}), '*')
  }

  renderPost = ({id, headimgurl, username, post_title, addtime}) => {
    const { location: { query } } = router;
    //console.log(id)
    return (
      <section className={styles.post} key={id} onClick={() => router.replace(`/BiBaDetail?id=${id}&phone=${query.phone}`)}>
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
    if (this.props.barInfo === null) {
      return <div style={{fontSize: '14px'}}>无结果</div>
    }
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
        <span className={styles["add-icon"]} onClick={this.post}></span>
      </div>
    )
  }
}

export default BiBa
