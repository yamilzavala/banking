'use client'
import React, { ReactNode } from 'react'
import { Sheet } from './SheetUi';
import { SheetTrigger } from './SheetUi';
import { SheetContent } from './SheetUi';
import { SheetClose } from './SheetUi';
import Image from 'next/image';
import styles from './SidebarUi.module.scss'
import Link from 'next/link';

interface SidebarProps {
  title?: string
  description?: string
  triggerLabel?: string
  children?: ReactNode
  onSave?: () => void
  side?: 'left' | 'right'
}

export const SidebarUiHeader = () => {
  return (
    <Link className={styles['sidebar-link']} href="/">           
      <Image className={'size-24'} src="/icons/logo.svg" alt="Horizon Logo" width={25} height={25}/>
      <h1 className={styles['sidebar-h1']}>Horizon</h1>  
    </Link>
  )
}

export const SidebarUi: React.FC<SidebarProps> = ({
  title = 'Sidebar',
  description,
  triggerLabel = 'Open Sidebar',
  children,
  onSave,
  side = 'left',
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src='/icons/hamburger.svg' alt='menu icon' width={30} height={30} className={`${styles['hide-hamburger']} cursor-pointer`}/>
      </SheetTrigger>
      <SheetContent side={side}>
        {/* Header */}
        <div className={`${styles.closeButtonContainer} flex justify-between`}>
          <SidebarUiHeader/>
          {/* Close Button */}
          <SheetClose>
            <span className={styles.closeButton}>×</span>
          </SheetClose>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>{children}</div>
      </SheetContent>
    </Sheet>
  )
}
