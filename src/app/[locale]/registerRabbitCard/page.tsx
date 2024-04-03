'use client'
import React, { useState } from 'react'
import Main from '@/components/layout/main/MainLayout'
import Button from '@/components/form/Button'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
import { Size, Color, Varaint, ModalType, TicketType, StationColor } from '@/shared/interface/constant'
import Image from 'next/image'
import InputNumberRabbitCard from '@/components/InputNumberRabbitCard'

type Props = {}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)


    return (
        <>
            <Main title={t('menu.registerRabbitCard')} close={false} back>
                <div className='m-4 grid grid-cols-6'>
                    <div className='col-span-6'>
                        <InputNumberRabbitCard required ></InputNumberRabbitCard>
                    </div>
                </div>
            </Main>
            <footer className='flex bg-white sticky bottom-0 px-5'><Button className='w-full' label={t('btn.next')}></Button></footer>
        </>
    )
}

export default page