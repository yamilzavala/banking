import React from 'react'
import '@/app/global.scss'
import styles from './RightSidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import BankCard from './BankCard'

const RightSidebar = ({user, transactions, banks}: RightSidebarProps) => {
  return (
    <aside className={`${styles['right-sidebar']}`}>
        {/* user info */}
        <section className='flex flex-col pb-8'>
            {/* banner */}
            <div className='profile-banner'/>
            {/* content */}
            <div className='profile'>
                <div className='profile-img'>
                  <span className='profile-avatar-name'>{user?.name[0]}</span>
                </div>

                <div className='profile-details'>
                  <h2 className='profile-name'>{user?.name}</h2>
                  <p className='profile-email'>{user?.email}</p>
                </div>
            </div>
        </section>

        {/* banks */}
        <section className='banks'>
            <div className='banks-container'>
              <h2 className='header-2'>My Banks</h2>
              <Link href='/' className='add-bank-container'>
                <Image
                  src='/icons/plus.svg'
                  alt='plus'
                  width={20}
                  height={20}
                />
                <h2 className='add-bank'>Add Bank</h2>
              </Link>              
            </div>

            {/* cards list */}
            {banks?.length > 0 && (
                <div className='cards-list'>
                    <div className='first-card-list'>
                      <BankCard
                        key={banks[0].id}
                        account={banks[0]}
                        userName={user?.name}
                        showBalance={false}
                      />
                    </div>
                   {banks[1] && (
                      <div className='second-card-list'>
                        <BankCard
                          key={banks[1].id}
                          account={banks[1]}
                          userName={user?.name}
                          showBalance={false}
                        />
                      </div>
                    )}
                </div>
            )}
        </section>
    </aside>
  )
}

export default RightSidebar