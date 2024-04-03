
import React from 'react';
import Image from 'next/image'
import { Timeline } from 'primereact/timeline';
import { StationColor } from '@/shared/interface/constant'
type Station = {
    time: string
    station: string
    color: StationColor
}
type Props = {
    date: string
    station: Station[]
    code: string
    balance?: string
    chargedDate: string
}
const StepTrip = (props: Props) => {


    return (
        <div className='flex flex-col items-start justify-start  m-1 border-b-2 border-gray-light text-sm'>
            <div>{props.date}</div>
            {
                props.station ?
                    props.station.map((items, index) => {
                        return <div key={items.station} >
                            <div className='flex flex-row'>
                                <div className='m-2'>{items?.time}</div>
                                {
                                    items.color == StationColor.GREEN ?
                                        <Image src="/svg/btsGreenIcon.svg" alt="BTS" width={15} height={15}></Image>
                                        : <></>
                                }
                                {
                                    items.color == StationColor.YELLOW ?
                                        <Image src="/svg/btsYellowIcon.svg" alt="BTS" width={15} height={15}></Image>
                                        : <></>
                                }
                                {
                                    items.color == StationColor.PINK ?
                                        <Image src="/svg/btsPinkIcon.svg" alt="BTS" width={15} height={15}></Image>
                                        : <></>
                                }
                                <div className='m-2'>{items.station}</div>
                            </div>
                            {
                                props.station.length !== index + 1 ?
                                    <div className='flex flex-col'>
                                        <div className='w-[84px] border-dashed h-8 border-r-2 border-gray-dark'></div>
                                    </div> : <></>
                            }
                        </div>
                    })
                    : <></>
            }
            <div className='bg-primary pt-1 bg-opacity-50 rounded-md px-1 text-dark'>{props.code}</div>
            <div className='flex flex-row my-3'>
                <div className='px-1 pt-1 rounded-md border border-primary'>Charged Date</div>
                <div className='mx-2 mt-1'>{props.chargedDate}</div>
            </div>
        </div>
    )
}

export default StepTrip
