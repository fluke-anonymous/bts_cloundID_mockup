import React from 'react'
import Image from 'next/image';
import Button from '@/components/form/Button'
import { TicketType, StationColor } from '@/shared/interface/constant'
type Props = {
    color?: StationColor
    code: string
    amountTrip: string
    status: string
    date: string
    type?: TicketType
    disabled?: boolean
    btnStart?: boolean
    onClick?: () => void
}

const Ticket = (props: Props) => {
    const ticketType = () => {
        if (props.disabled) {
            return '/image/ticketDisabled.png'

        } else {

            switch (props.type) {
                case TicketType.PRESENT:
                    return '/image/ticketImage.png'
                    break;
                case TicketType.WAIT:
                    return '/image/ticketWhiteImage.png'
                    break;
                case TicketType.EXPIRED:
                    return '/image/ticketDisabled.png'
                    break;
                default:
                    return '/image/ticketImage.png'
                    break;
            }
        }

    }
    const colorStation = () => {
        switch (props.color) {
            case StationColor.PINK:
                return '/svg/btsPinkIcon.svg'
                break;
            case StationColor.GREEN:
                return '/svg/btsGreenIcon.svg'
                break;
            case StationColor.YELLOW:
                return '/svg/btsYellowIcon.svg'
                break;
            default:
                return '/svg/btsPinkIcon.svg'
                break;
        }
    }
    return (
        <div className='flex my-2 mx-4'>
            <div className='absolute z-50 h-46 pt-4 w-[360px] flex flex-row justify-between items-center text-md '>
                {
                    props.disabled ?
                        <>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='bg-white rounded-full p-2 ml-5 mr-2'>
                                    <Image className='h-5 w-5' src={colorStation()} alt="BTS" width={16} height={16}></Image>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <div className='text-md text-gray-medium'>{props.code}</div>
                                    <div className='text-lg font-bold text-gray-medium'>{props.amountTrip}</div>
                                </div>
                            </div>
                            <div className='flex flex-col px-2 border-l-2 border-gray  justify-between items-start'>
                                <div className='text-gray-medium text-sm '>{props.status}</div>
                                <div className='text-gray-medium'>{props.date}</div>
                            </div>
                        </>
                        :
                        <>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='bg-white rounded-full p-2 ml-5 mr-2'>
                                    <Image className='h-5 w-5' src={colorStation()} alt="BTS" width={16} height={16}></Image>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <div className='text-md text-black'>{props.code}</div>
                                    <div className='text-lg font-bold text-black'>{props.amountTrip}</div>
                                </div>
                            </div>
                            <div className='flex flex-col px-2 border-l-2 border-primary  justify-between items-start'>
                                <div className='text-gray-medium text-sm '>{props.status}</div>
                                <div className='  inline-flex '>{props.date}</div>
                            </div>
                        </>

                }
                {
                    !props.disabled && props.btnStart ?
                        <div>
                            <Button className='mx-3' label="เริ่มใช้" onClick={() => props.onClick} ></Button>
                        </div> : <></>
                }
            </div>
            <Image className='flex relative z-0' src={ticketType()} alt="BTS" width={360} height={240}></Image>
        </div>
    )
}

export default Ticket