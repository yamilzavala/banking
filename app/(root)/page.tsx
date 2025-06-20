import React from 'react'
import styles from '@/app/(root)/page.module.scss'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const banks = [
    {
        currentBalance: 1250.12,
    },
    {       
        currentBalance: 1354.16,
    },
]
    


const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className={styles.home}>
      {/* MAIN CONTENT */}
      <div className={styles['home-content']}>
        <header className={styles['home-header']}>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.12}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      {/* RIGHT SIDEBAR */}
      <RightSidebar user={loggedIn} transactions={[]} banks={banks}/>
    </section>
  )
}

export default Home