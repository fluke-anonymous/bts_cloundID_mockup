import React, { useState } from 'react'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
type Props = {
    required?: Boolean
    validate?: string
}

const InputNumberRabbitCard = (props: Props) => {

    //lang
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)

    const [formattedNumber, setFormattedNumber] = useState<string>('');

    const formatNumber = (value: string) => {
        // Remove all non-digit characters from the input value
        let formattedValue = value.replace(/\D/g, '');

        // Insert a space after the first character
        if (formattedValue.length > 1) {
            formattedValue = formattedValue.slice(0, 1) + ' ' + formattedValue.slice(1);
        }

        // Insert a space after every 8 characters
        if (formattedValue.length > 9) {
            formattedValue = formattedValue.slice(0, 10) + ' ' + formattedValue.slice(10);
        }

        // Trim any extra spaces
        formattedValue = formattedValue.trim();

        return formattedValue;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Get the raw input value
        const value = event.target.value;

        // Format the input value
        const formattedValue = formatNumber(value);

        // Update the state with the formatted value
        setFormattedNumber(formattedValue);
    };

    return (
        <div>
            <label className='text-3xl'>{t('rabbitNumberCard')}</label>
            <div className='flex flex-row text-3xl'>
                <div>
                    088
                </div>
                <input
                    className='border-b-2 pb-2 appearance-none border-gray-light'
                    type="text"
                    value={formattedNumber}
                    onChange={handleChange}
                    placeholder="X XXXXXXXX X"
                />
            </div>
            {props.validate
                ?
                <div className='text-danger'>{t('rabbitCardNumberIsIncorrectPleaseEnterAgain')}</div>
                :
                <div className='text-gray-light'>{t('13digitRabbitCardNumber')}</div>
            }
        </div>
    );
}

export default InputNumberRabbitCard