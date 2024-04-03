'use client'
import React, { useState } from 'react'
import Main from '@/components/layout/main/MainLayout'
import Button from '@/components/form/Button'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
import { Size, Color, Varaint, ModalType, TicketType, StationColor }
    from '@/shared/interface/constant'
import MenuBar from '@/components/MenuBar'
import Modal from '@/components/modal/Modal'

type Props = {}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    const [registerStatus, setRegisterStatus] = useState(true)
    const [balance, setBalance] = useState('0.00')
    const [rabbitNumber, setRabbitNumber] = useState('Rabbit No. 123 4 567890123')
    const [visible, setVisible] = useState(false)
    // Modal
    const btnRightModal = {
        label: t('register'),
    }
    const onClickModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    const onClickAddBtn = () => {
        onClickModal()
    }
    return (
        <>
            <Modal
                type={ModalType.ALERT}
                visible={visible}
                description={t('modal.registerForRabbitCardNow')}
                icon="rabbitConfirm"
                btnRight={btnRightModal}
                btnCancel
                onClose={closeModal}
            ></Modal>
            <Main title="BTS" icon="backIcon" close back>
                <div className='m-4'>
                    <div className='grid grid-cols-4'>
                        {
                            registerStatus ?
                                <>
                                    <div className='col-span-4 text-center'>
                                        <h6 className='text-dark'>{t('pleaseRegister')}</h6>
                                    </div>
                                    <div className='col-span-4 text-center my-5'>
                                        <Button
                                            className='px-9'
                                            label={t('register')}
                                            variant={Varaint.CONTAINED}
                                            onClick={() => onClickAddBtn()}
                                        ></Button>
                                    </div>
                                    <div className='col-span-4'>
                                        <MenuBar icon="ticketDisabledIcon" label={t('menu.myPass')} disabled />
                                        <MenuBar icon="historyDisabledIcon" label={t('menu.history')} disabled />
                                        <MenuBar icon="rabbitPayDisabledIcon" label={t('menu.rabbitPay')} disabled />
                                        <MenuBar icon="settingDisabledIcon" label={t('menu.setting')} disabled />
                                    </div>
                                </>
                                :
                                <>
                                    <div className='col-span-3'>
                                        <h4 className='text-4xl'>฿{balance}</h4>
                                        <h6 className='text-gray'>{rabbitNumber}</h6>
                                    </div>
                                    <div className='col-start-4'>
                                        <Button label={t('btn.addBalance')} variant={Varaint.CONTAINEDWHITE}
                                            onClick={() => onClickAddBtn()}
                                        ></Button>
                                    </div>
                                    <div className='col-span-4'>
                                        <MenuBar icon="ticketIcon" label={t('menu.myPass')} />
                                        <MenuBar icon="historyIcon" label={t('menu.history')} />
                                        <MenuBar icon="rabbitPayIcon" label={t('menu.rabbitPay')} />
                                        <MenuBar icon="settingIcon" label={t('menu.setting')} />
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </Main>
            <footer className='sticky bottom-0 text-center p-2 bg-white  '>
                <a className='text-gray  text-md underline '>{t('userManual')}</a>
            </footer>
        </>
    )
}

export default page