'use client'
import React, { useState } from 'react'
import Main from '@/components/layout/main/MainLayout'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
import { TicketType, StationColor } from '@/shared/interface/constant'
import Tab from '@/components/Tab'
import Ticket from '@/components/Ticket'
import Image from 'next/image'
type Props = {}

const page = (props: Props) => {
    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)

    const [activeTab, setActiveTab] = useState(TicketType.PRESENT)
    const [data, setData] = useState(true)

    const onClickTicket = () => {
        console.log('ticket')
    }

    const contentsFunc = () => {
        if (data) {
            return <>
                <div className='text-sm text-primary my-5'>หมายเหตุ: ราคาเที่ยวเดินทางยังไม่รวมค่าโดยสารจำนวน 10 หรือ 15 บาท (ขึ้นอยู่
                    กับประเภทของบัตรโดยสาร สำหรับส่วนต่อขยาย)</div>
                <Ticket
                    color={StationColor.YELLOW}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="อายุใช้งาน"
                    date="17/09/2023 - 17/10/2023"
                    type={TicketType.PRESENT}
                ></Ticket>
                <Ticket
                    color={StationColor.PINK}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="อายุใช้งาน"
                    date="17/09/2023 - 17/10/2023"
                    type={TicketType.PRESENT}
                ></Ticket>
                <Ticket
                    color={StationColor.GREEN}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="อายุใช้งาน"
                    date="17/09/2023 - 17/10/2023"
                    type={TicketType.PRESENT}
                ></Ticket>
            </>
        } else {
            return <div className='flex flex-col items-center'>
                <Image className='flex pt-56' src="/svg/ticketIcon.svg" alt="BTS" width={36} height={46}></Image>
                <div className='text-sm my-4'>ไม่พบเที่ยวเดินทาง</div>
            </div >
        }
    }

    const tabArray = [
        {
            id: TicketType.PRESENT,
            title: t('currentlyUsing'),
            content: contentsFunc()
        },
        {
            id: TicketType.WAIT,
            title: t('waitingForActivation'),
            content: <>
                <div className='text-sm text-gray my-5'>หมายเหตุ: อายุใช้งาน 30 วัน นับตั้งแต่วันที่เริ่มใช้ครั้งแรก</div>
                <Ticket
                    color={StationColor.YELLOW}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="เริ่มใช้งาน"
                    date="17/09/2023"
                    type={TicketType.WAIT}
                    btnStart
                    onClick={() => onClickTicket()}
                ></Ticket>
                <Ticket
                    color={StationColor.PINK}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="เริ่มใช้งาน"
                    date="17/09/2023"
                    type={TicketType.WAIT}
                    btnStart
                    onClick={() => onClickTicket()}
                ></Ticket>
                <Ticket
                    color={StationColor.GREEN}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="เริ่มใช้งาน"
                    date="17/09/2023"
                    type={TicketType.WAIT}
                    btnStart
                    onClick={() => onClickTicket()}
                ></Ticket></>
        },
        {
            id: TicketType.EXPIRED,
            title: t('usedExpired'),
            content: <>
                <div className='text-sm text-gray my-5'>หมายเหตุ: แสดงเฉพาะประวัติล่าสุด 3 เดือน</div>
                <Ticket
                    color={StationColor.YELLOW}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="อายุใช้งาน"
                    date="17/09/2023 - 17/10/2023"
                    disabled
                    type={TicketType.EXPIRED}
                ></Ticket>
                <Ticket
                    color={StationColor.PINK}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="อายุใช้งาน"
                    date="17/09/2023 - 17/10/2023"
                    disabled
                    type={TicketType.EXPIRED}
                ></Ticket>
                <Ticket
                    color={StationColor.GREEN}
                    code="sS_02_33"
                    amountTrip="2/3"
                    status="อายุใช้งาน"
                    date="17/09/2023 - 17/10/2023"
                    disabled
                    type={TicketType.EXPIRED}
                ></Ticket></>
        },
    ]

    return (
        <Main title={t('menu.myPass')} close back>
            <div className='m-2'>
                <Tab tabs={tabArray}></Tab>
            </div>
        </Main>
    )
}

export default page