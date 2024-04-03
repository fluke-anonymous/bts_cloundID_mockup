'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
import Button from '@/components/form/Button'
import { Varaint } from '@/shared/interface/constant';
type Props = {
    icon?: String,
    back?: Boolean,
    close?: Boolean,
    title?: String
}

const NavBar = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)

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
    const [tripMain, setTripMain] = useState(false)
    const tripMainFunction = () => {
        setTripMain(!tripMain)
    }
    return (
        <nav className="flex flex-col py-4 px-2 gap-4 ">
            <div className="grid grid-cols-4 h-[32px]">
                {
                    backIcon ?
                        <div className='col-span-1' onClick={onClickBtnBack}>
                            <Image className="opacity-100 fill-white m-1" src="/svg/backIcon.svg" alt="BTS" width={36} height={36}></Image>
                        </div> : <div className='col-span-1'></div>
                }
                <div className='col-span-2 text-center'>
                    <h1 className='my-2 text-3xl text-white'>
                        BTS
                    </h1>
                </div>
                {
                    closeIcon ?
                        <div className='col-span-1' onClick={onClickBtnClose}>
                            <div className='flex justify-end'>
                                <Image className="opacity-100 fill-white m-1" src="/svg/homePlusIcon.svg" alt="BTS" width={36} height={36}></Image>
                            </div>
                        </div> : <></>
                }
            </div>
            <div>
                <div className='text-white text-lg'>{t('remainingTravel')}</div>
            </div>
            <div className='grid grid-cols-12' onClick={tripMainFunction}>
                <div className='col-span-1'>
                    <div className=' bg-white rounded-full p-2 my-auto'>
                        <Image src="/svg/btsYellowIcon.svg" alt="BTS" width={16} height={16}></Image>
                    </div>
                </div>
                <div className='col-span-5'>
                    <h5 className='text-3xl my-auto mx-4 text-white'>0/3 เที่ยว</h5>
                </div>
                <div className='col-span-1' onClick={tripMainFunction}>
                    {
                        tripMain ?
                            <Image className='my-auto' src="/svg/arrowUp.svg" alt="BTS" width={24} height={14}></Image>
                            :
                            <Image className='my-auto' src="/svg/arrowRight.svg" alt="BTS" width={14} height={14}></Image>
                    }
                </div>
                <div className='col-span-3 col-start-10'>
                    <Button label={t('btn.buyTrip')} variant={Varaint.OUTLINEDWHITE}></Button>
                </div>
            </div>
            <div className='grid grid-cols-6'>
                <div className='col-span-6'>
                    <h6 className='text-white opacity-60'>ใช้ได้ถึง 17/10/2023</h6>
                </div>
            </div>
            {

                tripMain ?
                    <><div className='grid grid-cols-12'>
                        <div className='col-span-1'>
                            <div className=' bg-white rounded-full p-2 my-auto'>
                                <Image src="/svg/btsPinkIcon.svg" alt="BTS" width={16} height={16}></Image>
                            </div>
                        </div>
                        <div className='col-span-8 col-start-2'>
                            <h5 className='text-xl my-auto mx-4 text-white'>2/3 เที่ยว</h5>
                            <h6 className='text-white  mx-4 opacity-60'>ใช้ได้ถึง 17/10/2023</h6>
                        </div>
                    </div>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-1'>
                                <div className=' bg-white rounded-full p-2 my-auto'>
                                    <Image src="/svg/btsGreenIcon.svg" alt="BTS" width={16} height={16}></Image>
                                </div>
                            </div>
                            <div className='col-span-8 col-start-2'>
                                <h5 className='text-xl my-auto mx-4 text-white'>2/3 เที่ยว</h5>
                                <h6 className='text-white  mx-4 opacity-60'>ใช้ได้ถึง 17/10/2023</h6>
                            </div>
                        </div></>

                    :
                    <></>
            }

        </nav>
    )
}

export default NavBar