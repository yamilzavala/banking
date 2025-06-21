// 1. Backend crea link_token   → [createLinkToken]
// 2. Frontend usa link_token   → [abre widget]
// 3. Usuario conecta banco     → [Plaid devuelve public_token]
// 4. Backend intercambia public_token → access_token
// 5. Backend usa access_token → obtiene cuentas, guarda banco, etc.

// Frontend
//  ↳ PlaidLink (get token) ─────────┐
//                                    ↓
// createLinkToken(user)   ←──────── [✔️ Link Token generado]
//                                    ↓
// Usuario conecta banco → [public_token recibido]
//                                    ↓
// exchangePublicToken({ publicToken, user })
//  ↳ Intercambia token
//  ↳ Obtiene cuenta
//  ↳ Crea processorToken
//  ↳ Agrega a Dwolla
//  ↳ Guarda en DB
//  ↳ Revalida página
//  ↳ Devuelve éxito

import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/ButtonUi'
import styles from './PlaidLink.module.scss'
import {
    usePlaidLink,
    PlaidLinkOptions,
    PlaidLinkOnSuccess,
    PlaidLinkOnSuccessMetadata,
  } from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user)
            setToken(data?.linkToken);
        };
        getLinkToken();
    }, [user])

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({
          publicToken: public_token,
          user,
        })
        router.push('/');
      }, [user, router]);

    const config: PlaidLinkOptions = {
        onSuccess,
        token,
    };

    const { open, ready } = usePlaidLink(config);  

  return (
    <>
     {variant === 'primary' ? (
        <Button 
          className={styles['plaidlink-primary']}
          onClick={() => open()}
          disabled={!ready}
        >
            Connect bank
        </Button>
     ) : variant === 'ghost' ? (
        <Button className={styles['plaidlink-ghost']}>
            Connect bank
        </Button>
     ) : (
        <Button className={styles['plaidlink-default']}>
            Connect bank
        </Button>
     )}
    </>
  )
}

export default PlaidLink