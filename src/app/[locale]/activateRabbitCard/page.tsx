'use client'
import React, { useState } from 'react'
import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/features/counter/counterSlice'
import Main from '@/components/layout/main/MainLayout'
import Button from '@/components/form/Button'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
import { Size, Color, Varaint, ModalType, TicketType, StationColor } from '@/shared/interface/constant'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    return (
        <>

            <Main title={t('activateTheCard')} back={false}>
                <div className='grid grid-cols-5 m-2'>
                    <div className='col-span-1 col-start-3'>
                        <Image className='w-full h-[196px] m-auto' src="/svg/activateRabbitIcon.svg" alt="BTS" width={24} height={96}>
                        </Image>
                    </div>
                    <div className='col-span-5'>
                        <h6 className='flex justify-center my-2'>Rabbit No. 088 1 23456789 0</h6>
                        <h6 className='flex justify-center my-2 text-sm'>{t('pleasePrepareYourRabbitCardToActivate')}</h6>
                    </div>
                </div>
            </Main>
            <footer className='grid grid-cols-2 bg-white sticky bottom-0 py-2 px-5 gap-5'>
                <div className='col-span-2 text-center text-gray-medium'>
                    สามารถจัดการบัตรแรบบิทได้ที่เมนู <a className='underline' href=""> ตั้งค่า</a>
                </div>
                <div className='col-span-2 w-full'>
                    <Button className="w-full" label={t('btn.start')}></Button>
                </div>
            </footer>
        </>
    )
}

export default page