import React, { ChangeEvent } from 'react';

interface SelectOptionProps {
    options: { label: string; value: string }[];
    label?: string;
    value: string;
    validate?: string;
    required?: boolean;
    disabled?: boolean;
    onChange: (value: string) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({ options, label, value, validate, required, disabled, onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <>
            <div className='flex flex-row'>
                {
                    label ?
                        <label
                            htmlFor={value}
                            className='ml-1 '
                        >
                            {label}
                        </label>
                        : <></>
                }
                {
                    required ?
                        <span className='text-red mx-1'>*</span>
                        : <></>
                }
            </div>
            <select
                value={value}
                onChange={handleChange}
                disabled={disabled}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {required && validate && !disabled
                ?
                <div className='text-red mx-1'>{validate}</div>
                : <></>
            }
        </>
    );
};

export default SelectOption;
