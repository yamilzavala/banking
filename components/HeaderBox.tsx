import React from 'react'
import styles from './HeaderBox.module.scss'

const HeaderBox = ({type, title, user, subtext}: HeaderBoxProps) => {
  return (
    <div className={styles['header-box']}>
        <h1 className={styles['header-box-title']}>
            {title}
            {type === 'greeting' && (<span className={styles['text-bankGradient']}>&nbsp;{user}</span>)}
        </h1>
        <p className={styles['header-box-subtext']}>{subtext}</p>
    </div>
  )
}

export default HeaderBox