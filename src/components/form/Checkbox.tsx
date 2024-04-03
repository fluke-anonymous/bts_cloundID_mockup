import React from 'react'
import Image from 'next/image'
type Props = {
    label: string
    name: string
    checked: boolean
    onClick: (checked: boolean) => void;
}

const Checkbox = (props: Props) => {
    return (
        <div className='m-4' onClick={() => props.onClick(props.checked)}>
            <div className="flex items-center me-4">
                {
                    props.checked ?
                        <Image src="/svg/checkBoxIcon.svg" alt="BTS" width={24} height={24}></Image>
                        :
                        <Image src="/svg/checkBoxFalseIcon.svg" alt="BTS" width={24} height={24}></Image>
                }
                <label
                    htmlFor={props.name}
                    className="ms-2 text-sm text-gray-dark font-medium"
                    dangerouslySetInnerHTML={{ __html: props.label }}
                >
                </label>
            </div>
        </div>
    )
}

export default Checkbox
