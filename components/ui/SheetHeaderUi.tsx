import React from "react"
import styles from "./SheetHeaderUi.module.scss"
import { ReactNode } from "react"

export function SheetHeader({ children }: { children: ReactNode }) {
    return <div className={styles.header}>{children}</div>
}