'use client'
import React, { useState, createContext, useContext, ReactNode } from 'react'
import styles from './SheetUi.module.scss'

const SheetContext = createContext<{
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}>({
  isOpen: false,
  setIsOpen: () => {},
})

export function Sheet({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

export function SheetTrigger({ children }: { children: ReactNode }) {
  const { setIsOpen } = useContext(SheetContext)
  return <div onClick={() => setIsOpen(true)}>{children}</div>
}

export function SheetClose({ children }: { children: ReactNode }) {
  const { setIsOpen } = useContext(SheetContext)
  return <div onClick={() => setIsOpen(false)}>{children}</div>
}

interface SheetContentProps {
  children: ReactNode
  side?: 'left' | 'right'
}

export function SheetContent({ children, side = 'left' }: SheetContentProps) {
  const { isOpen } = useContext(SheetContext)

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} />
      <div
        className={`${styles.sheet} ${styles[side]} ${isOpen ? styles.open : ''}`}
      >
        {children}
      </div>
    </>
  )
}

