'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

type Props = {
  icon?: String,
  back?: Boolean,
  close?: Boolean,
  title?: String
}
const Navbar = (props: Props) => {

  const icon = props.icon ?? ''
  const backIcon = props.back ?? false
  const closeIcon = props.close ?? false
  const title = props.title ?? 'BTS'

  const router = useRouter()
  const onClickBtnClose = () => {
    router.push('/')
  }
  const onClickBtnBack = () => {
    history.back()
  }

  return (
    <nav className="flex flex-col py-4 gap-4 ">
      <div className="grid grid-cols-4 h-[32px]">
        {
          backIcon ?
            <div className='col-span-1' onClick={onClickBtnBack}>
              <Image className="opacity-100 fill-white m-1" src="/svg/backIcon.svg" alt="BTS" width={36} height={36}></Image>
            </div> : <div className='col-span-1'></div>
        }
        <div className='col-span-2'></div>
        {
          closeIcon ?
            <div className='col-span-1' onClick={onClickBtnClose}>
              <div className='flex justify-end'>
                <Image className="opacity-100 fill-white m-1" src="/svg/closeIcon.svg" alt="BTS" width={36} height={36}></Image>
              </div>
            </div> : <></>
        }
      </div>
      <div className="flex flex-row h-[50px] mx-3 item-end text-center">
        {
          icon ?
            <>
              <Image className="w-6 mx-2" src="/svg/BTSIcon.svg" alt="BTS" width={24} height={24} ></Image>
              <h1 className="pt-1 text-3xl text-white item-end">
                {title}
              </h1>
            </>
            :
            <h1 className="m-auto pt-1 text-3xl text-white">
              {title}
            </h1>
        }

      </div>
    </nav>)
}

export default Navbar