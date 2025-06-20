import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { logoutAccount } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'

const Footer = ({user, type = 'desktop'}: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount()
    if (loggedOut) {
      router.push('/sign-in');
    }
  }

  return (
    <div className={styles.footer}>
        <div className={type === 'mobile' ? styles['footer_name-mobile'] : styles['footer_name']}>
            <p className={styles['footer_first-name']}>
                {user?.name[0]}
            </p>
        </div>

        <div className={type === 'mobile' ? styles['footer_email-mobile'] : styles['footer_email']}>
            <h1 className={styles['footer_header-name']}>
                {user?.name}
            </h1>
            <p className={styles['footer_first-email']}>
                {user?.email}
            </p>
        </div>

        <div className={styles['footer_image']} onClick={handleLogOut}>
            <Image src='icons/logout.svg' fill alt='logout' />
        </div>
    </div>
  )
}

export default Footer