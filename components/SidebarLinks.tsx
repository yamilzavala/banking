import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/global.scss'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.scss'

const SidebarLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((link) => {
          const isActive = link.route === pathname || pathname.startsWith(`${link.route}/`);
          return (
            <Link key={link.label} href={link.route} className={`${styles['sidebar-link']} ${isActive ? 'bg-bank-gradient' : ''}`}>
              <div className='relative size-6'>
                <Image className={`icon ${isActive ? 'icon--active' : ''}`} src={link.imgURL} alt={link.label} fill/>
              </div>
              <p className={`${styles['sidebar-label']} ${isActive ? '!text-white' : ''}`}>{link.label}</p>
            </Link>
          )
        })}    
    </>
  )
}

export default SidebarLinks