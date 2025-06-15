import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/global.scss'
import { usePathname } from 'next/navigation'
import { SheetClose } from './ui/SheetUi'
import styles from './SibarMobileLinks.module.scss'

const SibarMobileLinks = () => {
  const pathname = usePathname();
  return (
    // <div className='flex h-full-minus-72 flex-col justify-between overflow-y-auto'>
    <div className={styles['sibar-mobile-links-container']}>
      <SheetClose>
        <nav className={styles['nav-container']}>
          {sidebarLinks.map((link) => {
              const isActive = link.route === pathname || pathname.startsWith(`${link.route}/`);
              return (
                <SheetClose key={link.route}>
                  <Link href={link.route} className={`${styles['nav-link']} ${isActive ? 'bg-bank-gradient' : ''}`}>
                    <Image className={`icon ${isActive ? 'icon--active' : ''}`} src={link.imgURL} alt={link.label} width={20} height={20}/>
                    <p className={`${styles['nav-paragraph']} ${isActive ? '!text-white' : ''}`}>{link.label}</p>
                  </Link>
                </SheetClose>
              )
            })}   

            USER 
        </nav>
      </SheetClose>

      FOOTER
    </div>
  )
}

export default SibarMobileLinks