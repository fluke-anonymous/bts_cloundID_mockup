import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import Image from 'next/image'
import Button from '@/components/form/Button'
import { Size, Color, Varaint, ModalType } from '@/shared/interface/constant'
import { useTranslation } from '@/app/i18n/i18n'
import { useParams } from 'next/navigation'
type btnRight = {
  label: string
}

type Props = {
  type: ModalType
  title?: string
  description: string
  icon?: string
  visible: boolean
  btnCancel: boolean
  btnRight: btnRight
  openModal?: () => void
  onClose?: () => void
}
const Modal = (props: Props) => {
  //lang
  const params = useParams<{ locale: string }>()
  const { t } = useTranslation(params.locale)
  const [visible, setVisible] = useState(false)
  const header = props.title
  const iconComputed = () => {
    return `/svg/${props.icon}.svg`
  }

  return (
    <div className="flex bg-white justify-content-center">
      {props.type === ModalType.ALERT ? (
        <Dialog
          modal
          className="flex flex-col justify-center bg-white border p-2"
          visible={props.visible}
          style={{ width: '79vw', borderRadius: '30px' }}
          onHide={props.onClose}
        >
          {props.icon ? (
            <Image
              className="mx-auto"
              src={iconComputed()}
              alt={iconComputed()}
              width={40}
              height={40}
            ></Image>
          ) : (
            <></>
          )}
          {header ? (
            <h4 className="my-2 text-lg text-center text-black bg-white">
              {header}
            </h4>
          ) : (
            <></>
          )}
          <p className="my-2 text-lg text-center text-black bg-white">
            {props.description}
          </p>
          <div className="flex flex-row justify-center">
            {props.btnCancel ? (
              <Button
                className="w-full"
                label={t('btn.cancel')}
                size={Size.SMALL}
                color={Color.DISABLED}
                onClick={props.onClose}
              ></Button>
            ) : (
              <></>
            )}
            {props.btnRight ? (
              <Button
                className="w-full"
                label={props.btnRight.label}
                size={Size.SMALL}
                color={Color.PRIMARY}
              ></Button>
            ) : (
              <></>
            )}
          </div>
        </Dialog>
      ) : (
        <Dialog
          modal
          className="flex flex-col justify-center bg-white border p-2"
          visible={props.visible}
          style={{ width: '60vw', borderRadius: '30px' }}
          content={({ hide }) => props.description}
          onHide={props.onClose}
        ></Dialog>
      )}
    </div>
  )
}

export default Modal
