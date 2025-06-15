
'use client'
import React, { useState } from 'react'
import styles from "./AuthForm.module.scss"
import '@/app/global.scss'
import Link from 'next/link'
import Image from 'next/image'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from './ui/form/Form'
import CustomInput from './ui/CustomInput'
import { Button } from './ui/ButtonUi'
import { authFormSchema } from '@/lib/utils'
import Loader2 from './ui/Loader2'
import { useRouter } from 'next/navigation'
 
const AuthFormHeader = () => {
    return (
      <Link className={styles['sidebar-link']} href="/">           
        <Image src="/icons/logo.svg" alt="MeliBank Logo" width={34} height={34}/>
        <h1 className={styles['sidebar-h1']}>MeliBank</h1>  
      </Link>
    )
}

const AuthForm = ({type = 'sign-up'}: {type: string}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address1: "",
            state: "",
            postalCode: "",
            dataOfBirth: "",
            ssn: "",
        },
    })
    
    // 2. Define a submit handler.
    async function onSubmit(data: z.infer<typeof formSchema>) {
        setLoading(true);

        try {
           // Sign up with Appwrite & create a plain link token
           if(type === 'sign-up') {
            // const newUser = await signUp(data)
            // setUser(newUser);
           }

           if(type === 'sign-in') {
            // const response = await signIn({email: data.email, password: data.password})
            // if(response) router.push('/');
            
           }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className={styles['auth-form']}>
            {/* Header */}
            <header className={styles['auth-form-header']}>
                <AuthFormHeader/>

                <div className={styles['auth-form-header-content']}>
                    <h1 className={styles['auth-form-header-title']}>
                        {user 
                        ? 'Link Account' 
                        : type === 'sign-in' 
                            ? 'Sign In' 
                            : 'Sign Up'
                        }
                        <p className={styles['auth-form-header-subtitle']}>
                            {user 
                            ? 'Link your account to continue'
                            : 'Please enter your details to continue'
                            }
                        </p>
                    </h1>
                </div>
            </header>

            {/* Content */}
            {user ? (
                <div className={styles['auth-form-content']}>
                    {/* PlaidLink */}
                </div>
            ) : (
                <>
                    {/* Form */}
                    <Form form={form} onSubmit={onSubmit}>
                        { type === 'sign-up' && (
                            <>
                                <div className={styles['auth-form-content']}>
                                    <CustomInput name="firstName" type="text" control={form.control} label="First Name" placeholder="Ex: John" />
                                    <CustomInput name="lastName" type="text" control={form.control} label="Last Name" placeholder="Ex: Doe" />
                                </div>

                                <CustomInput name="address1" type="text" control={form.control} label="Address" placeholder="Enter your address" />
                                <CustomInput name="city" type="text" control={form.control} label="City" placeholder="Enter your city" />

                                <div className={styles['auth-form-content']}>
                                    <CustomInput name="state" type="text" control={form.control} label="State" placeholder="Ex: New York" />
                                    <CustomInput name="postalCode" type="text" control={form.control} label="Postal Code" placeholder="Ex: 12345" />
                                </div>

                                <div className={styles['auth-form-content']}>
                                    <CustomInput name="dataOfBirth" type="date" control={form.control} label="Date of Birth" placeholder="Ex: YYYY-MM-DD" />
                                    <CustomInput name="ssn" type="text" control={form.control} label="SSN" placeholder="Ex: 123-45-6789" />
                                </div>
                            </>
                        )}

                        <CustomInput name="email" type="email" control={form.control} label="Email" placeholder="Enter your email" />
                        <CustomInput name="password" type="password" control={form.control} label="Password" placeholder="Enter your password" />

                        <div className={styles['auth-btn-container']}>
                            <Button className={styles['form-btn']} type="submit" disabled={loading}>
                                {loading ? (
                                    <div className={styles['form-btn-loading']}>
                                        <Loader2 size={15} />&nbsp;Loading...                                
                                    </div>
                                    ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'
                                }
                            </Button>
                        </div>
                    </Form>    

                    {/* Footer */}
                    <footer className={styles['auth-form-footer']}>
                        <p className={styles['auth-form-footer-text']}>
                            {type === 'sign-in' ? 'Don\'t have an account?' : 'Already have an account?'}
                            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className={styles['auth-form-footer-link']}>
                                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                            </Link>
                        </p>
                    </footer>
                </>
            )}
        </section>
    )
}

export default AuthForm