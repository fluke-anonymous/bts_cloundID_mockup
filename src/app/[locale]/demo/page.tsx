'use client'
import React, { useState } from 'react'
import type { RootState } from '@/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/features/counter/counterSlice'
import Main from '@/components/layout/main/MainLayout'
import Button from '@/components/form/Button'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
import { Size, Color, Varaint, ModalType, TicketType, StationColor } from '@/shared/interface/constant'
import MenuBar from '@/components/MenuBar'
import InputText from '@/components/form/InputText'
import Modal from '@/components/modal/Modal'
import Checkbox from '@/components/form/Checkbox'
import Radio from '@/components/form/RadioGroup'
import StepTrip from '@/components/StepTrip'
import SelectOption from '@/components/form/SelectOption'
import Ticket from '@/components/Ticket'
import { PingApi } from '@/shared/service/testSwagger/apis/index'
import { AppControllerPing200Response } from '@/shared/service/testSwagger/models/index'
export default function Page() {
  //lang
  const params = useParams<{ locale: string }>()
  const { t } = useTranslation(params.locale)
  // redux
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const btnIncrement = () => {
    dispatch(increment())
  }
  const btnDecrement = () => {
    dispatch(decrement())
  }

  const btnRightModal = {
    label: t('demo'),
  }
  const [visible, setVisible] = useState(false)
  const [checkedForm, setCheckedForm] = useState(false)
  const [inputText, setInputtext] = useState('')
  const [inputRadio, setInputRadio] = useState('')

  // inputtext
  const onChangeInputtext = (_value: string) => {
    setInputtext(_value)
  }

  // Modal
  const onClickModal = () => {
    setVisible(true)
  }
  const closeModal = () => {
    setVisible(false)
  }

  // checkedForm
  const checkedFunction = () => {
    setCheckedForm(!checkedForm)
  }

  // option
  const optionRadio = [
    {
      label: t('lorem'),
      value: '1'
    },
    {
      label: t('lorem'),
      value: '2'
    },
  ]
  const handleOptionChange = (value: string) => {
    setInputRadio(value);
  };

  const station = [
    {
      time: '18:15:36',
      station: 'Chaeng Watthana - Pak Kret',
      color: StationColor.GREEN
    },
    {
      time: '18:28:56',
      station: 'Bang Chak',
      color: StationColor.PINK
    }
  ]
  const station2 = [
    {
      time: '18:15:36',
      station: 'Chaeng Watthana - Pak Kret',
      color: StationColor.YELLOW
    },
    {
      time: '18:28:56',
      station: 'Bang Chak',
      color: StationColor.PINK
    }
  ]
  // SelectOption
  const [select, setSelect] = useState('')
  const options = [
    { label: '01/12/2023 - 20/12/2023', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const onChangeSelect = (value: string) => {
    setSelect(value)
  }

  // ticket
  const onClickTicket = () => {
    console.log('ticket')
  }
  const pingApi = new PingApi();
  const [response, setResponse] = useState(null)
  const createUserAPI = () => {
    // userApi.createUser(createUserRequest)
    pingApi.appControllerPing()
      .subscribe({
        next: (data: AppControllerPing200Response) => {
          // Handle successful response
          console.log('appControllerPing:', data);
          setResponse(data.message)
        },
        error: (error: any) => {
          // Handle error
          console.error('Error appControllerPing:', error);
          setResponse(error.data)
        }
      });
  }



  return (
    <Main title="BTS" icon="backIcon" close back>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="text-xl font-bold text-center border shadow rounded m-1">
          {t('demo')} Redux
        </h5>
        <div className="p-5">Count: {count}</div>
        <Button
          label="+ increment"
          color={Color.PRIMARY}
          size={Size.SMALL}
          variant={Varaint.CONTAINED}
          onClick={btnIncrement}
        ></Button>
        <Button
          label="- decrement"
          color={Color.PRIMARY}
          size={Size.SMALL}
          variant={Varaint.CONTAINEDWHITE}
          onClick={btnDecrement}
        ></Button>
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="text-xl font-bold text-center border shadow rounded m-1">
          {t('button')}
        </h5>
        <div>
          primary TEXT
          <Button
            label="+ increment"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.TEXT}
          ></Button>
          <Button
            label="- decrement"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.TEXT}
          ></Button>
        </div>
        <div>
          primary LABEL
          <Button
            label="+ increment"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.LABEL}
          ></Button>
          <Button
            label="- decrement"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.LABEL}
          ></Button>
        </div>
        <div>
          primary CONTAINED
          <Button
            label="+ increment"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.CONTAINED}
          ></Button>
          <Button
            label="- decrement"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.CONTAINED}
          ></Button>
        </div>
        <div>
          OUTLINEDWHITE
          <Button
            label="+ increment"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.CONTAINEDWHITE}
          ></Button>
          <Button
            label="- decrement"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.CONTAINEDWHITE}
          ></Button>
        </div>
        <div>
          OUTLINED
          <Button
            label="+ increment"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.OUTLINED}
          ></Button>
          <Button
            label="- decrement"
            color={Color.PRIMARY}
            size={Size.SMALL}
            variant={Varaint.OUTLINED}
          ></Button>
        </div>
        <div>
          disabled
          <Button
            label="+ increment"
            size={Size.SMALL}
            variant={Varaint.CONTAINED}
            disabled
          ></Button>
          <Button
            label="- decrement"
            size={Size.SMALL}
            variant={Varaint.CONTAINED}
            disabled
          ></Button>
        </div>
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('Menu Bar')}
        </h5>
        <MenuBar icon="ticketIcon" label={t('menu.myPass')} />
        <MenuBar icon="historyIcon" label={t('menu.history')} />
        <MenuBar icon="settingIcon" label={t('menu.myPass')} />
        <MenuBar icon="ticketDisabled" label={t('menu.myPass')} disabled />
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('InputText')}
        </h5>
        <InputText
          label={t('firstNameLastName')}
          value={inputText}
          placeholder={t('warning.pleaseEnter', { msg: t('firstNameLastName') })}
          validate={t('warning.pleaseEnter', { msg: t('firstNameLastName') })}
          required
          onChange={onChangeInputtext}
        />
        <InputText
          label={t('firstNameLastName')}
          value={inputText}
          placeholder={t('warning.pleaseEnter', { msg: t('firstNameLastName') })}
          onChange={onChangeInputtext}
        />
        <InputText
          label={t('firstNameLastName')}
          value={inputText}
          placeholder={t('warning.pleaseEnter')}
          disabled
        />
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('Modal')}
        </h5>
        <Button onClick={onClickModal}></Button>
        <Modal
          type={ModalType.ALERT}
          visible={visible}
          title={t('demo')}
          description={t('lorem')}
          icon="rabbitConfirm"
          btnRight={btnRightModal}
          btnCancel
          onClose={closeModal}
        ></Modal>
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('Checkbox')}
        </h5>
        <pre>value:{`${checkedForm}`}</pre>
        <Checkbox
          name={'inputCheckbox'}
          checked={checkedForm}
          onClick={checkedFunction}
          label={t('lorem')}></Checkbox>
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('Radio')}
        </h5>
        <pre>value:{inputRadio}</pre>
        <Radio
          name={'inputRadio'}
          value={inputRadio}
          option={optionRadio}
          onChange={handleOptionChange}></Radio>
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('StepTrip')}
        </h5>
        <StepTrip station={station} code="S15 12/15" date="20/12/2023" chargedDate='20/12/2023 | 15:46:28' ></StepTrip>
        <StepTrip station={station2} code="S15 12/15" date="20/12/2023" chargedDate='20/12/2023 | 15:46:28' ></StepTrip>
      </div>
      <div className="flex flex-col justify-center border-2 p-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('SelectOption')}
        </h5>
        <pre>value :{select}</pre>
        <SelectOption
          options={options}
          label={t('menu.myPass')}
          value={select}
          required
          onChange={onChangeSelect} ></SelectOption>
        <SelectOption
          options={options}
          label={t('menu.myPass')}
          value={select}
          onChange={onChangeSelect}
          disabled></SelectOption>
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('Ticket')}
        </h5>
        <pre>value :{select}</pre>
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
          status="เริ่มใช้งาน"
          date="17/09/2023"
          type={TicketType.WAIT}
          btnStart
          onClick={() => onClickTicket()}
        ></Ticket>
        <Ticket
          color={StationColor.YELLOW}
          code="sS_02_33"
          amountTrip="2/3"
          status="อายุใช้งาน"
          date="17/09/2023 - 17/10/2023"
          disabled
          type={TicketType.EXPIRED}
        ></Ticket>
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg border-orange-dark m-1">
        <h5 className="m-2 text-xl font-bold text-center border shadow rounded m-1">
          {t('service')}
        </h5>
        <Button onClick={createUserAPI}></Button>
        <pre>value :{select}</pre>
        <div><pre>{response}</pre></div>
      </div>
    </Main>
  )
}
