import React from 'react'
import Image from 'next/image'
type Props = {
    label: String,
    icon: String,
    disabled?: Boolean,
    onClick?: Object
}
const MenuBar = (props: Props) => {
    const iconComputed = () => {
        return `/svg/${props.icon}.svg`
    }
    return (
        <>
            {/* <pre>{ iconComputed() }</pre> */}
            {
                props.disabled
                    ?
                    <span className='flex flex-row items-center justify-between py-2 px-5 border-2 my-2 border-gray-light rounded-lg h-[60px]'>
                        <Image src={iconComputed()} alt="selectIcon" width={30} height={30}></Image>
                        <span className='w-full text-black items-center justify-start'>
                            <h6 className='mx-5 mt-1 text-disabled'>
                                {props.label}
                            </h6>
                        </span>
                        <Image src="/svg/SelectIcon.svg" alt="selectIcon" width={16} height={16}></Image>
                    </span>
                    : <span className='flex flex-row items-center justify-between py-2 px-5 my-2 border-2 border-gray-light rounded-lg h-[60px]' onClick={() => props.onClick}>
                        <Image src={iconComputed()} alt="selectIcon" width={24} height={24}></Image>
                        <span className='w-full text-black items-center justify-start'>
                            <h6 className='mx-5 mt-1'>
                                {props.label}
                            </h6>
                        </span>
                        <Image src="/svg/SelectIcon.svg" alt="selectIcon" width={16} height={16}></Image>
                    </span>
            }

        </>
    )
}
export default MenuBar
