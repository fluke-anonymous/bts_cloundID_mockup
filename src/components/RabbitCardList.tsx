import React from 'react'
import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@/components/form/Button'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
import { Size, Color, Varaint, ModalType, TicketType, StationColor, CardStatus } from '@/shared/interface/constant'
import Image from 'next/image'

type Props = {
    rabbitNo: string
    registerDate: string
    status: CardStatus
}

const RabbitCardList = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    return (
        <div className='grid grid-cols-7 border-b my-3 border-gray-medium min-h-[70px] '>
            <div className='col-span-5'>
                <h5>Rabbit No. {props.rabbitNo}</h5>
                {
                    props.status === CardStatus.ACTIVE || props.status === CardStatus.INACTIVE ?
                        <div className='flex flex-row py-2'>
                            {
                                props.status === CardStatus.ACTIVE ?
                                    <Image src="/svg/correctGreenIcon.svg" alt="BTS" width={24} height={24}></Image>
                                    :
                                    <></>
                            }
                            {
                                props.status === CardStatus.ACTIVE || props.status === CardStatus.INACTIVE ?
                                    <h5 className='text-gray-medium mx-1 '>วันที่ลงทะเบียนบัตร {props.registerDate}</h5>
                                    : <></>
                            }
                        </div> : <></>
                }

                {
                    props.status === CardStatus.NONEOPEN ?
                        <div className='flex flex-row py-2'>
                            <Image src="/svg/closeRedIcon.svg" alt="BTS" width={24} height={24}></Image>
                            <h5 className='text-gray-medium mx-1'>{t('cardHasNotBeenActivatedYet')}</h5>
                        </div>
                        :
                        <></>
                }
            </div>
            <div className='col-span-2'>
                <div className='flex flex-col items-end justify-around h-full'>
                    <Button className='px-2 py-2 mb-3' size={Size.MEDIUM} label={t('btn.deleteCard')} variant={Varaint.CONTAINEDWHITE}></Button>
                    {
                        props.status === CardStatus.NONEOPEN ?
                            <div className='text-gray'>ระงับการใช้บัตร</div>
                            : <></>
                    }
                    {
                        props.status === CardStatus.ACTIVE ?
                            <div className='text-red underline'>ระงับการใช้บัตร</div>
                            : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default RabbitCardList