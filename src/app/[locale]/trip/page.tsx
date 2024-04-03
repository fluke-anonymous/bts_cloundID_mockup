'use client'
import React from 'react'
import Layout from '@/components/layout/mainMenu/Layout'
import MenuBar from '@/components/MenuBar'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
type Props = {}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    return (
        <Layout>
            <div className='mt-5 mx-2'>
                <div className='m-2'>Rabbit No. 088 1 23456789 0</div>
                <MenuBar icon="ticketIcon" label={t('menu.myPass')} />
                <MenuBar icon="historyIcon" label={t('menu.history')} />
                <MenuBar icon="settingIcon" label={t('menu.setting')} />
            </div>
        </Layout>
    )
}

export default page