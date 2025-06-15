import React, { ReactNode } from "react"
import styles from "./SheetFooterUi.module.scss"

export function SheetFooter({ children }: { children: ReactNode }) {
    return <div className={styles.footer}>{children}</div>
}