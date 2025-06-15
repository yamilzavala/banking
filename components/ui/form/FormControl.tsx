import React from "react"
import styles from "./FormControl.module.scss"

export function FormControl({ children }: { children: React.ReactNode }) {
  return <div className={styles['form-control']}>{children}</div>
}
