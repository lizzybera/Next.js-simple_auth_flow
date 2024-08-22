import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center bg-yellow-300'>

      <div>Welcome please proceed to either login or sign up </div>

    <div className='w-[15%] flex justify-between items-center mt-4'>
      <Link href={"./signup"}>
    <Button variant={'destructive'} className='hover:bg-blue-400'> sign up </Button></Link>
    <Link href={"./signIn"}>
    <Button variant={'destructive'} className='hover:bg-blue-400'> sign in </Button></Link>
    </div>

    </div>
  )
}

export default page