"use client"
import React from "react"
import { FormProvider, UseFormReturn } from "react-hook-form"

interface FormProps {
  children: React.ReactNode
  form: UseFormReturn<any>
  onSubmit: (data: any) => void
}

export function Form({ children, form, onSubmit }: FormProps) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  )
}
