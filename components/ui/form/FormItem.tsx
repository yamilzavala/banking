import React from "react"
import styles from "./FormItem.module.scss"

export function FormItem({ children }: { children: React.ReactNode }) {
  return <div className={styles['form-item']}>{children}</div>
}
