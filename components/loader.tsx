import Image from 'next/image'
import React from 'react'

export default function Loader() {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center '>
        <div className='relative animate-pulse'>
            <Image
            src={'/logo.png'}
            alt='Logo'
            width={50}
            height={50}
            />
        </div>
        <p className='text-sm text-muted-foreground font-semibold animate-pulse'>
        Clouds are raining now...
        </p>
    </div>
  )
}
