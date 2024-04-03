import React from 'react'

type Props = {
    label: string,
    value: string,
    required?: boolean,
    validate?: string,
    placeholder: string,
    disabled?: boolean,
    onChange?: (value: string) => void;
}

const InputText: React.FC<Props> = ({ required, label, validate, placeholder, value, disabled, onChange }) => {
    const onChangeInput = (_value: string) => {
        onChange(_value)
    }
    return (
        <>
            <div className='flex'>
                <label className='text-md text-gray-dark ml-1' htmlFor={value}>{label}</label>
                {
                    required
                        ?
                        <div className='text-danger ml-1 mt-1'>*</div>
                        :
                        <></>
                }
            </div>
            {
                disabled
                    ?
                    <input className='border-b w-full border-gray-light bg-white m-1 pl-1 pt-2 text-gray-light disabled:rounded-md disabled:shadow-inner disabled:text-gray-light disabled:bg-gray-so-light '
                        type="text"
                        name={value}
                        id={value}
                        value={value}
                        disabled={disabled} />
                    :
                    <input className='border-b w-full border-gray-light bg-white m-1 pl-1 pt-2 hover:border-gray-light focus:outline-none focus:ring-0  focus:shadow-xl'
                        type="text"
                        name={value}
                        id={value}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => onChangeInput(e.target.value)}
                    />
            }
            {
                required && validate && !value
                    ?
                    <span className='text-sm font-bold p-1 text-danger'>{validate}</span>
                    :
                    <></>
            }
        </>
    )
}

export default InputText