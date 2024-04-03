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

type Props = {}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    // option
    const [inputRadio, setInputRadio] = useState('')

    const optionRadio = [
        {
            label: <><div className='font-bold'>กระเป๋าเงิน LINE Pay</div><div>฿ 0.00</div></>,
            value: '1'
        },
        {
            label: <><div className='font-bold'>KBank - LINE POINTS</div><div>ยังไม่ได้ลงทะเบียนบัตรเครดิต</div></>,
            value: '2'
        },
        {
            label: <><div className='font-bold'>บัตรเครดิต</div><div>ยังไม่ได้ลงทะเบียนบัตรเครดิต</div></>,
            value: '3'
        },
    ]
    const handleOptionChange = (value: string) => {
        setInputRadio(value);
    };
    //checkbox
    const [checkedForm, setCheckedForm] = useState(false)
    const [checkedForm2, setCheckedForm2] = useState(false)

    // checkedForm
    const checkbox1 = "<div>ไม่ต้องใส่รหัสผ่านเมื่อชำระเงินที่ร้านค้านี้ในครั้งถัดไป หากคุณสมัครแพ็กเกจของร้านค้านี้ไว้หลังจากนี้ระบบจะชำระเงินอัตโนมัติให้ด้วย เช่นกัน <span className='text-primary'>(จำเป็น)</span></div>"
    const checkbox2 = "<div>ข้าพเจ้ายินยอมที่จะเพิ่มบัญชีทางการ LINE Pay เป็นเพื่อน รวมถึงการรับ ข้อมูลเกี่ยวกับสินค้า การลดราคา แคมเปญ และอื่น ๆ จากร้านค้า</div>"
    const checkedFunction = () => {
        setCheckedForm(!checkedForm)
    }
    const checkedFunction2 = () => {
        setCheckedForm2(!checkedForm2)
    }
    return (
        <>
            <Main title={t('paymentMethod')} close back>
                <div className='m-2'>
                    <Image className='m-auto' src="/svg/btsFare.svg" alt="BTS" width={45} height={64}>
                    </Image>
                    <div className='text-xs text-gray-light my-2'>วิธีการชำระเงินที่คุณเลือกจะถูกใช้ในการชำระเงิน LINE Pay ทั้งหมด</div>
                    <div className='grid grid-cols-4  '>
                        <div className='col-span-3'>
                            <Radio
                                name={'inputRadio'}
                                value={inputRadio}
                                option={optionRadio}
                                onChange={handleOptionChange}></Radio>
                        </div>
                        <div className='col-span-1 col-start-4'>
                            <Button
                                className='my-3'
                                label={t('btn.addBalance')}
                                variant={Varaint.CONTAINEDWHITE}

                            ></Button>
                            <Button
                                className='my-3 w-[60px]'
                                label={t('btn.add')}
                                variant={Varaint.CONTAINEDWHITE}

                            ></Button>
                            <Button
                                className='my-3 w-[60px]'
                                label={t('btn.add')}
                                variant={Varaint.CONTAINEDWHITE}
                            ></Button>
                        </div>
                        <div className='col-span-3'>
                            <Image className="ml-5 my-5" src="/svg/creditCardIcon.svg" alt="BTS" width={186} height={96}></Image>
                        </div>
                        <div className='col-span-1'>
                            <Button
                                className=' my-3 w-[60px]'
                                label={t('btn.add')}
                                variant={Varaint.CONTAINEDWHITE}
                            ></Button>
                        </div>
                        <div className='col-span-4'>
                            <Checkbox
                                name={'inputCheckbox'}
                                checked={checkedForm}
                                onClick={checkedFunction}
                                label={checkbox1}></Checkbox>
                            <Checkbox
                                name={'inputCheckbox'}
                                checked={checkedForm2}
                                onClick={checkedFunction2}
                                label={checkbox2}></Checkbox>
                        </div>
                    </div>
                </div>
            </Main>
            <footer className='flex bg-white sticky bottom-0 px-5'><Button className='w-full' label={t('btn.next')}></Button></footer>
        </>
    )
}

export default page