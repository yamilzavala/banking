'use client'
import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/global.scss'
import SidebarLinks from './SidebarLinks'

const Sidebar = ({user}: SiderbarProps) => {

  return (
    <section className={styles.sidebar}>
      <nav className={styles['nav-container']}>
        {/* LOGO */}
        <Link className={styles['nav-link']} href="/">
          <Image src="/icons/logo.svg" alt="MeliBank Logo" width={34} height={34}/>
          <h1 className={styles['sidebar-logo']}>MeliBank</h1>
        </Link>
        {/* LINKS */}
        <SidebarLinks/>

        USER
      </nav>

      FOOTER
    </section>
  )
}


export default Sidebar