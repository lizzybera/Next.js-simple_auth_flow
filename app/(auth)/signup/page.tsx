"use client"

import { Button } from '@/components/ui/button'
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const [pass, setPass] = useState<boolean>(false)

  const changePass = () =>{
    setPass(!pass) 
  }

  const mainAction = async (formData : FormData) =>{
// "use server"
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    await fetch(`/api/signup`, {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify({name, email, password})
    }).then((res) =>{
        console.log(res);
        redirect("/signIn")
    })
  }
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <form action={mainAction} className='w-[30%] '>
          <div className='text-[23px] font-[800]'>Sign Up</div>

          <div className='mt-5'>
            <div className='text-[15px] font-[800]'>Name</div>
            <input type="text" name='name' className='w-full border-[1px] rounded-lg h-[50px] mt-2 outline-none pl-3 bg-none'  />
          </div>

          <div className='mt-5'>
            <div className='text-[15px] font-[800]'>Email</div>
            <input type="email" name='email' className='w-full border-[1px] rounded-lg h-[50px] mt-2 outline-none pl-3 bg-none'  />
          </div>

          <div className='mt-5'>
            <div className='text-[15px] font-[800]'>Password</div>
            <div className='w-full border-[1px] rounded-lg h-[50px] mt-2 flex justify-between items-center'>
            <input type={pass ? "password" : "text"} name='password' className='outline-none pl-3 bg-none'   />

            {
              pass ? <EyeClosedIcon className='cursor-pointer mr-2'
              onClick={changePass}
              /> : <EyeOpenIcon className='cursor-pointer mr-2'
              onClick={changePass}
               />
            }
            </div>
          </div>

          <Button type='submit' className='w-full h-[55px] mt-6 text-[18px] font-bold'>Create Account</Button>

          <div className='justify-end flex mt-3'>Already have an account? 
            <Link href="/signIn" className='ml-2 text-red-500'>log in</Link>
          </div>
      </form>


    </div>
  )
}

export default page