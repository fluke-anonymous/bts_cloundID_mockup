import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Size, Color, Varaint } from '@/shared/interface/constant'
type Props = {
  label?: String
  color?: Color
  variant?: Varaint
  disabled?: Boolean
  icon?: String
  size?: Size
  onClick?: () => void
  className?: string
}

const Button = (props: Props) => {
  const _label = props.label ?? 'Submit'
  const _disabled = props.disabled
  const _size: Size = props.size ?? Size.SMALL
  const _icon = props.icon ?? ''
  const _color: Color = props.color ?? Color.PRIMARY
  const _varaint: Varaint = props.variant ?? Varaint.CONTAINED

  const classButton = () => {
    return [
      ` ${props.className} `,
      ' md:whitespace-nowrap m-1 ',
      ' inline-flex gap-2 items-center text-center justify-center ',
      ' rounded-3xl ',
      _icon ? ' flex-row ' : '',
      _size == 'SMALL' ? ' py-1 px-2 text-sm ' : '',
      _size == 'MEDIUM' ? ' py-2 px-4 text-base ' : '',
      _size == 'SMALL' && _icon && !props.label ? ' !p-[6px] ' : '',
      _size == 'MEDIUM' && _icon && !props.label ? ' !p-[12px] ' : '',
      _size == 'LARGE' && _icon && !props.label ? ' !p-[20px] ' : '',
      _size == 'LARGE' ? ' py-4 px-6 text-base ' : '',
      _disabled && _varaint == 'TEXT'
        ? ' text-gray-light bg-gray-so-light disabled:text-gray-light '
        : '',
      _disabled && _varaint == 'LABEL'
        ? ' text-gray-light bg-gray-so-light disabled:text-gray-light  '
        : '',
      !_disabled && _varaint == 'TEXT'
        ? ` text-${_color} hover:underline focus:bg-${_color} focus:drop-shadow-lg focus:bg-opacity-30 `
        : '',
      !_disabled && _varaint == 'LABEL'
        ? ` text-${_color}  hover:bg-${_color} cursor-default focus:bg-${_color} hover:text-white focus:drop-shadow-lg focus:bg-opacity-30 `
        : '',
      _disabled && _varaint == 'OUTLINED'
        ? ' text-gray-light bg-gray-so-light disabled:text-gray-light disabled:border-gray-light disabled:border disabled:bg-gray-light '
        : '',
      !_disabled && _varaint == 'OUTLINED'
        ? ` border border-${_color} bg-white text-${_color} hover:border-white hover:bg-${_color} hover:text-white hover:shadow-lg `
        : '',
      _disabled && _varaint == 'OUTLINEDWHITE'
        ? ' text-gray-light bg-gray-so-light disabled:text-gray-light disabled:border-gray-light disabled:border '
        : '',
      !_disabled && _varaint == 'OUTLINEDWHITE'
        ? ` border border-white text-white hover:border-white hover:bg-primary hover:text-white hover:shadow-lg `
        : '',
      _disabled && _varaint == 'CONTAINED'
        ? ' text-white bg-gray-so-light disabled:text-gray-so-light disabled:border-gray-light disabled:border disabled:bg-gray-light '
        : '',
      !_disabled && _varaint == 'CONTAINED'
        ? ` border border-${_color} bg-${_color} text-white  hover:shadow-lg `
        : '',
      _disabled && _varaint == 'CONTAINEDWHITE'
        ? ' text-white bg-gray-so-light disabled:text-gray-light disabled:border-gray-light disabled:border '
        : '',
      !_disabled && _varaint == 'CONTAINEDWHITE'
        ? ` border-2 border-${_color} bg-white text-black hover:bg-${_color} hover:shadow-lg hover:text-white `
        : '',
    ]
  }

  const iconComputed = () => {
    return `/svg/${_icon}.svg`
  }

  return (
    <>
      {/* <pre>{classButton()}</pre> */}
      <button
        type="button"
        className={classButton()}
        onClick={props.onClick}
        value={_label.toString()}
        disabled={Boolean(props.disabled)}
      >
        {_icon ? (
          <>
            <Image
              className="fill-white"
              src={iconComputed()}
              alt={_icon.toString()}
              width={24}
              height={24}
            ></Image>
          </>
        ) : (
          <></>
        )}
        {_label}
      </button>
      {/* <button className="md:whitespace-nowrap m-2  inline-flex gap-2 items-center  rounded-3xl  py-1 px-2 text-sm  border border-disabled bg-primary text-primary hover:border-white hover:bg-danger hover:text-white hover:shadow-lg">
        1
      </button> */}
    </>
  )
}

export default Button
