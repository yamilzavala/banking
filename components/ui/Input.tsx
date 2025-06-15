import React from "react"
import styles from "./Input.module.scss"
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={styles['input-class']}
      style={{
        padding: "8px 12px",
        border: "1px solid #d1d5db",
        borderRadius: "6px",
        fontSize: "14px",
        outlineColor: "#3b82f6",
      }}
    />
  )
}
