// CustomInput.tsx
import React from "react"
import { FormField } from "./form/FormField"
import { FormControl } from "./form/FormControl"
import { FormDescription } from "./form/FormDescription"
import { FormItem } from "./form/FormItem"
import { FormLabel } from "./form/FormLabel"
import { FormMessage } from "./form/FormMessage"
import { Input } from "./Input"
import { Control, FieldPath } from "react-hook-form"
import { authFormSchema } from "@/lib/utils"
import { z } from "zod"

const formSchema = authFormSchema('sign-up');

interface CustomInputProps {
  name: FieldPath<z.infer<typeof formSchema>>
  control: Control<z.infer<typeof formSchema>>
  label: string
  placeholder?: string
  description?: string
  type?: string
}

const CustomInput = ({ name, control, label, placeholder, description, type }: CustomInputProps) => (
  <FormField
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <FormControl>
          <Input id={name} placeholder={placeholder} {...field} type={type} />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage name={name} />
      </FormItem>
    )}
  />
)

export default CustomInput
