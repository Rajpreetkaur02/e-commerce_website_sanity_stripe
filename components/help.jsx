import React from 'react'

import styles from '../styles/help.module.css'

const help = () => {
  return (
    <div className={styles.help}>
            <div className={styles.helpheader}>
                <span>How can you Help</span>
            </div>
            <div className={styles.helpcategories}>
                    <div className={styles.category1}>
                        <span>Buy a gift</span>
                        <span>all the money from the items you purchase is given to the NGOs working towards the wildlife conservation</span>
                        <div className={styles.learnmore}><span>Learn more</span></div>
                    </div>
                    <div className={styles.category2}>
                        <span>Buy a gift</span>
                        <span>all the money from the items you purchase is given to the NGOs working towards the wildlife conservation</span>
                        <div className={styles.learnmore}><span>Learn more</span></div>
                    </div>
                    <div className={styles.category3}>
                        <span>Buy a gift</span>
                        <span>all the money from the items you purchase is given to the NGOs working towards the wildlife conservation</span>
                        <div className={styles.learnmore}><span>Learn more</span></div>
                    </div>
            </div>
        </div>
  )
}

export default help;