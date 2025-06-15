import React from 'react'
import styles from './TotalBalanceBox.module.scss'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
import '@/app/global.scss'

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
    <section className={styles['total-balance']}>
        <div className={styles['total-balance-chart']}>
            {/* DoughnutChart */}
            <DoughnutChart accounts={accounts} />
        </div>

        <div className={styles['user-info-container']}>
            <h2 className={'header-2'}>
                Bank Accounts: {totalBanks}
            </h2>
            <div className={styles['user-balance-info']}>
                <p className={styles['total-balance-label']}>
                    Total Current Balance
                </p>
                <div className={styles['user-balance-amount']}>
                    <AnimatedCounter amount={totalCurrentBalance} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox