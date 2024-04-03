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
import Tab from '@/components/Tab'
import Ticket from '@/components/Ticket'
import Image from 'next/image'
import Radio from '@/components/form/RadioGroup'
import Checkbox from '@/components/form/Checkbox'
import MenuBar from '@/components/MenuBar'

type Props = {}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    return (
        <>
            <Main close={false}>
                <div className='grid grid-cols-3 m-2'>
                    <div className='col-span-1 col-start-2'>
                        <Image className='w-full py-5' src="/svg/contactRabbitIcon.svg" alt="BTS" width={64} height={45}></Image>
                    </div>
                    <div className='col-span-3'>
                        <h6 className='p-5 text-center' dangerouslySetInnerHTML={{ __html: t('pleaseBringYourCardToTheBTSTicketOfficeEveryStationToActivateTheCard') }}></h6>
                    </div>
                    <div className='col-span-3'>
                        <MenuBar icon="ticketDisabledIcon" label={t('menu.myPass')} disabled />
                        <MenuBar icon="historyDisabledIcon" label={t('menu.history')} disabled />
                        <MenuBar icon="rabbitPayDisabledIcon" label={t('menu.rabbitPay')} disabled />
                        <MenuBar icon="settingDisabledIcon" label={t('menu.setting')} disabled />
                    </div>
                </div>
            </Main >
            <footer className='sticky bottom-0 text-center p-2 bg-white  '>
                <a className='text-gray  text-md underline '>{t('userManual')}</a>
            </footer>
        </>
    )
}

export default page