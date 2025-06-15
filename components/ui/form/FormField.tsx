"use client"
import React from "react"
import { Control, Controller, useFormContext } from "react-hook-form"

interface FormFieldProps {
  name: string
  render: (props: { field: any }) => React.ReactElement
  control?: Control<any>
}

export function FormField({ name, render }: FormFieldProps) {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => render({ field })}
    />
  )
}
