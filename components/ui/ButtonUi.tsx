'use client'
import React from 'react'
import styles from './ButtonUi.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', className = '', ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    />
  )
}
