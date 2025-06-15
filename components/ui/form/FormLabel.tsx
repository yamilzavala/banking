import React from "react"
import styles from "./FormLabel.module.scss"

interface LabelProps {
  htmlFor?: string
  children: React.ReactNode
}

export function FormLabel({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles['form-label']}>
      {children}
    </label>
  )
}
