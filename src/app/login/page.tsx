/* eslint-disable @next/next/no-async-client-component */
'use client'

import { GitHub } from '@mui/icons-material'
import { getProviders, signIn } from 'next-auth/react'
import React from 'react'

const Login = async () => {
    const providers = await getProviders().then((res) => {
        return res
    })
    return (
        <div className='min-h-screen flex justify-center'>


            <div className='flex flex-col items-center mt-16'>
                <div className='text-2xl font-bold'>ログイン</div>

                <div>
                    {providers &&
                        Object.values(providers).map((provider) => {
                            return (
                                <div key={provider.id}>
                                    <button onClick={() => signIn(provider.id, { callbackUrl: '/' })} className='flex bg-black text-white p-4 mt-12 rounded-md'>
                                        <GitHub className='text-white mr-4' />
                                        GitHubでログイン
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='my-10'>または</div>

                <div className='flex flex-col'>
                    <label>Email</label>
                    <input className='border-2 rounded-sm mb-4' type="email" />
                    <label>Password</label>
                    <input className='border-2 rounded-sm mb-2' type="password" />

                    <button type='submit'>login</button>
                </div>
            </div>
        </div>
    )
}

export default Login