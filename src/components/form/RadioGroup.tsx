import React, { useState } from 'react'
import Image from 'next/image'
type option = {
    value: string;
    label: string;
}
type Props = {
    name: string
    option: option[]
    value: string
    onChange: (value: string) => void;
}


const RadioGroup = (props: Props) => {
    const [value, setValue] = useState(props.value)
    const onClickSelect = (_value: string) => {
        setValue(_value)
        props.onChange(_value)
    }
    return (
        <>
            {
                props.option.map((items) => {
                    return (
                        <div key={items.value} className='mx-4 flex flex-row' onClick={() => onClickSelect(items.value)} >
                            {
                                value === items.value ?
                                    <Image src="/svg/radioIcon.svg" alt="BTS" width={24} height={24}></Image>
                                    :
                                    <Image src="/svg/checkBoxFalseIcon.svg" alt="BTS" width={24} height={24}></Image>

                            }
                            <label className='m-1' htmlFor={items.value}>{items.label}</label>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RadioGroup