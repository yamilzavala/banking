import React from "react"
import styles from "./SheetTitleUi.module.scss"
import { ReactNode } from "react"

export function SheetTitle({ children }: { children: ReactNode }) {
    return <h2 className={styles.title}>{children}</h2>
}