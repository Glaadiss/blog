import React from 'react'
import styles from './post.module.css'
import { navigate } from 'gatsby'

export default class Post extends React.Component {
  state = {
    hover: false,
  }

  hover = () => this.setState({ hover: true })

  unHover = () => this.setState({ hover: false })

  render() {
    const { props, state, hover, unHover } = this
    const background = {
      background: state.hover
        ? hoverBackground(props.image)
        : `url(${props.image})`,
    }

    return (
      <div
        onMouseEnter={hover}
        onMouseLeave={unHover}
        className={styles.postContainer}
        onClick={() => navigate('/posts/another-one')}
      >
        <div className={styles.imageDateContainer} style={background}>
          <div className={styles.dateContainer}>{props.date}</div>
        </div>
        <div className={styles.tagContainer}> {props.tag} </div>
        <div className={styles.contentContainer}>
          <h2> {props.title} </h2>
          <h4> {props.subtitle}</h4>
        </div>
      </div>
    )
  }
}

function hoverBackground(url) {
  return `linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 100%
  ), url(${url})`
}
