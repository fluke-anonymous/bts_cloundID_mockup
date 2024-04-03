'use client'
import React, { useState } from 'react'
import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/features/counter/counterSlice'
import Main from '@/components/layout/main/MainLayout'
import Button from '@/components/form/Button'
import RabbitCardList from '@/components/RabbitCardList'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
import { Size, Color, Varaint, ModalType, TicketType, StationColor, CardStatus } from '@/shared/interface/constant'
import Image from 'next/image'

type Props = {

}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    return (
        <>
            <Main title={t('menu.setting')}>
                <div className='m-4'>
                    <RabbitCardList
                        rabbitNo='123 4 567890123'
                        registerDate="01/12/2023"
                        status={CardStatus.ACTIVE}
                    ></RabbitCardList>
                    <RabbitCardList
                        rabbitNo='123 4 567890123'
                        registerDate="01/12/2023"
                        status={CardStatus.INACTIVE}
                    ></RabbitCardList>
                    <RabbitCardList
                        rabbitNo='123 4 567890123'
                        registerDate="01/12/2023"
                        status={CardStatus.NONEOPEN}
                    ></RabbitCardList>
                    <div className='my-6'>
                        <div className=' text-lg font-bold '>{t('paymentMethod')}</div>
                        <div className='flex flex-row items-center my-2'>
                            <Image src="/svg/rabbitPayIconSq.svg" alt="BTS" width={28} height={28}></Image>
                            <div className='mx-1 text-lg'>Rabbit Pay</div>
                        </div>
                    </div>
                </div>
            </Main>
            <footer className='grid grid-cols-2 bg-white sticky bottom-0 py-2 px-5 gap-5'>
                <div className='col-span-2 text-center text-gray-medium'>
                    <a className='underline' href=""> ช่วยเหลือ</a>
                </div>
            </footer>
        </>
    )
}

export default page