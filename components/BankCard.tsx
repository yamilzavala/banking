import Link from 'next/link'
import React from 'react'
import styles from './BankCard.module.scss';
import { formatAmount } from '@/lib/utils';
import '@/app/global.scss'
import Image from 'next/image'

const BankCard = ({account, userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className={styles['container-card']}>
        <Link href={`/`} className={styles['bank-card']}>
            {/* content - left side */}
            <div className={styles['bank-card_content']}>
                <div>
                    <h1 className={styles['account-name']}>
                        {account.name || userName}
                    </h1>
                    <p className={styles['account-balance']}>
                        {formatAmount(account.currentBalance)}
                    </p>                    
                </div>

                <article className={styles['card-info-article-container']}>
                    <div className={styles['card-info-container']}>
                        <h1 className={styles['card-info-h1']}>
                            {userName}
                        </h1>
                        <h2 className={styles['card-info-h2']}>
                            ●● / ●●
                        </h2>
                    </div>
                    <p className={styles['credit-card-number']}>
                        ●●●● ●●●● ●●●● <span className='text-16'>1234</span>
                    </p>
                </article>
            </div>

            {/* icons - right side */}
            <div className={styles['bank-card_icon']}>
                <Image
                    src='/icons/Paypass.svg'
                    width={20}
                    height={24}
                    alt='pay'
                />
                <Image
                    src='/icons/mastercard.svg'
                    width={45}
                    height={32}
                    alt='mastercard'
                    className={styles['icon-card']}
                />
            </div>

            {/* lines */}
            <Image
                src='/icons/lines.svg'
                width={316}
                height={190}
                alt='lines'
                className={styles['lines']}
            />
        </Link>

        {/* COPY */}
    </div>
  )
}

export default BankCard