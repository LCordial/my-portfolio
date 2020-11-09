import styles from './component style/column.module.css'

import Link from 'next/link'

export default function Special({ children, special }) {
    return (
      
      <div>
        <header className={styles.header}>
          {special ? (
            <>
            <div className={styles.container}>
              <div className={styles.grid}>
              <div className={styles.column}>
                  <div>
                    <figure><img src="/images/hard-drive.svg"></img></figure>
                      <h1 className={styles.headers}>Technologies</h1>
                      <p className={styles.text}>Using different technologies makes programming a whole lot better, and easier. That's why I use them.</p>

                      <p className={styles.paragraphtitle}>Technologies:</p>
                      <ul className={styles.list}>
                          <li>Firebase</li>
                          <li>Next.js</li>
                      </ul>
                  </div>
                </div>
                <div className={styles.column}>
                  <div>
                    <figure><img src="/images/activity.svg"></img></figure>
                      
                      <h1 className={styles.headers}>Languages</h1>
                      <p className={styles.text}>I like to code things from scratch. Bringing an idea to life on the computer.</p>

                      <p className={styles.paragraphtitle}>Languages:</p>
                      <p className={styles.text}>Javascript, C#, Python, CSS,</p>
                      <p className={styles.paragraphtitle}>Dev Tools:</p>
                      <ul className={styles.list}>
                        <li>Visual Studio Code</li>
                        <li>Visual Studio</li>
                        <li>Github</li>
                        <li>Terminal</li>
                      </ul>
                  </div>
                    
                </div>
                <div className={styles.column}>
                  <div>
                    <figure><img src="/images/box.svg"></img></figure>
                      
                      <h1 className={styles.headers}>Ambience Studios</h1>
                      <p className={styles.text}>I program with a group named Ambience Studios. Which allows me to share ideas with other people!</p>

                      <p className={styles.paragraphtitle}>Find us on:</p>
                      <ul className={styles.list}>
                          <li>Github</li>
                      </ul>
                  </div>
                    
                </div>
              </div>

            </div>
            </>
          ) : (
            <>
            </>
          )}
        </header>
        <main>{children}</main>
      </div>
    )
  }