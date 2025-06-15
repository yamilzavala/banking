import React from "react"
import styles from "./SheetDescriptionUi.module.scss"
import { ReactNode } from "react"

export function SheetDescription({ children }: { children: ReactNode }) {
    return <p className={styles.description}>{children}</p>
}