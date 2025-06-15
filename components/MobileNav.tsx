'use client'
import React from 'react'
import { SidebarUi } from './ui/SidebarUi'
import SibarMobileLinks from './SibarMobileLinks'

const MobileNav = ({user}: MobileNavProps) => {

  return (
    <section>
       <SidebarUi triggerLabel="Open">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>         
          {/* Content */}
          <SibarMobileLinks/>          
        </div>
      </SidebarUi>
    </section>
  )
}

export default MobileNav