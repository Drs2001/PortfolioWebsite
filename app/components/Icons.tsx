import React from 'react'
import styles from './Icons.module.css';

const Icons = () => {
    return (
        <div className={styles.links}>
            <a href="https://github.com/Drs2001" target="_blank" rel="noopener noreferrer">
            <div className={styles.icons}>
              <img src="/github-mark-white.svg" alt="Open link" width="24" height="24"></img>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/dylan-spence-999036234/" target="_blank" rel="noopener noreferrer">
            <div className={styles.icons}>
              <img src="/linkedin.png" alt="Open link" width="24" height="24"></img>
            </div>
          </a>
          <a href="https://gitea.spence.cloud/Drs2001" target="_blank" rel="noopener noreferrer">
            <div className={styles.icons}>
              <img src="/gitea.png" alt="Open link" width="24" height="24"></img>
            </div>
          </a>
        </div>
    )
}

export default Icons