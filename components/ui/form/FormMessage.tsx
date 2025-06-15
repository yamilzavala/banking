"use client"
import React from "react"
import { useFormContext } from "react-hook-form"
import styles from "./FormMessage.module.scss"

export function FormMessage({ name }: { name: string }) {
  const {
    formState: { errors },
  } = useFormContext()

  if (!errors[name]) return null

  return <p className={styles['form-message']}>{String(errors[name]?.message)}</p>
}
