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
import Checkbox from '@/components/form/Checkbox'
import InputText from '@/components/form/InputText'
import Modal from '@/components/modal/Modal'

type Props = {}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    // inputtext
    const [inputText, setInputText] = useState('')
    const onChangeInputText = (_value: string) => {
        setInputText(_value)
    }
    // Modal
    const [visible, setVisible] = useState(false)
    const btnRightModal = {
        label: t('demo'),
    }
    const onClickModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
    // checkbox
    const [checkedForm, setCheckedForm] = useState(false)

    const onClickCheckbox = () => {
        setCheckedForm(!checkedForm)
    }
    // btnnext
    const onClickNext = () => {
        onClickModal()
    }
    return (
        <>
            <Modal
                type={ModalType.ALERT}
                visible={visible}
                title={t('addAPaymentMethod')}
                description={<div className='grid grid-cols-4 text-sm'><div className='col-span-2 text-left text-gray'>ร้านค้า</div><div className='col-span-2 text-right'>BTS FARE</div><div className='col-span-2 text-left text-gray'>สินค้า</div><div className='col-span-2 text-right'>วิธีการชำระเงิน</div><div className='col-span-2 text-left text-gray'>วิธีการชำระเงิน</div><div className='col-span-2 text-right'>กระเป๋าเงิน LINE Pay</div></div>}
                icon="rabbitConfirm"
                btnRight={btnRightModal}
                btnCancel
                onClose={closeModal}
            ></Modal>
            <Main title={t('menu.addCard')} close back>
                <div className='m-4 grid grid-cols-4 gap-5'>
                    <div className='col-span-4 text-center '>
                        <Button className='px-5 mb-5' label={t('btn.scanCard')} size={Size.MEDIUM} icon="scanIcon"></Button>
                    </div>
                    <div className='col-span-3'>
                        <div>{t('supportedCreditDebitCards')}</div>
                        <Image className=" my-2" src="/svg/creditCardIcon.svg" alt="BTS" width={186} height={96}></Image>
                    </div>
                    <div className='col-span-4'>
                        <InputText value={inputText} label={t('cardNumber')} placeholder={t('PleaseEnterNumbersOnly')} onChange={onChangeInputText} required></InputText>
                    </div>
                    <div className='col-span-2'>
                        <InputText label={t('expiredDate')} placeholder={t('DD/YY')} required></InputText>
                    </div>
                    <div className='col-span-2'>
                        <InputText label={t('CVCOrCVV')} placeholder={t('PleaseEnterNumbersOnly')} required></InputText>
                    </div>
                    <div className='col-span-4'>
                        <InputText label={t('realFirstNameEnglish')} placeholder={t('pleaseEnterLettersOnly')} required></InputText>
                    </div>
                    <div className='col-span-4'>
                        <InputText label={t('realLastNameEnglish')} placeholder={t('pleaseEnterLettersOnly')} required></InputText>
                    </div>
                    <div className='col-span-4'>
                        <InputText label={t('nameCard')} placeholder={t('pleaseEnterLettersAndOrNumbersOnly')} ></InputText>
                    </div>
                    <div className='col-span-4'>
                        <Checkbox checked={checkedForm} label={t('setAsPrimaryCard')} onClick={onClickCheckbox}></Checkbox>
                    </div>
                </div>
            </Main>
            <footer className='flex bg-white sticky bottom-0 px-5'><Button className='w-full' label={t('btn.next')} onClick={onClickNext}></Button></footer>
        </>
    )
}

export default page