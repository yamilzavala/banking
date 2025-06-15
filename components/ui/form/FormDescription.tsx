import React from "react"
import styles from "./FormDescription.module.scss"

export function FormDescription({ children }: { children: React.ReactNode }) {
  return <p className={styles['form-description']}>{children}</p>
}
