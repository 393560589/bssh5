import React, { PureComponent } from 'react'
import styles from './index.less'
import router from 'umi/router'
import { connect } from 'dva';
import formate from '../../utils/date';


@connect(({biba, loading, index}) => ({...biba, loading, ...index}))
class BiBa extends PureComponent {
  state={
    phone: ''
  }
  componentDidMount() {
    const { dispatch } = this.props
    const { location: { query } } = router
    dispatch({type: 'biba/fetchList', payload: query})
    dispatch({type: 'biba/fetchBarInfo', payload: query})

    // const { location: { query } } = router;
    let phone = query.phone;
    if (phone === 'undefined' || phone === undefined || phone === '') {
      phone = localStorage.getItem('bss_user_phone');
    } else {
      localStorage.setItem('bss_user_phone', phone);
    }

    this.setState({phone})
  }

  post = () => {
    const { id, smbo_title } = this.props.barInfo
    window.postMessage(JSON.stringify({type: 'post', id, title: smbo_title}), '*')
  }

  renderPost = ({id, headimgurl, username, post_title, addtime}) => {
    const {phone} = this.state;
    return (
      <section className={styles.post} key={id} onClick={() => router.push(`/BiBaDetail?id=${id}&phone=${phone}`)}>
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
