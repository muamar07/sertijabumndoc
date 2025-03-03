import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react'
import classNames from 'classnames'
import { Icon, IconType } from '..'
import './Button.scss'

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  typeIcon?: IconType
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent) => void
}

const ButtonComponent: React.FC<IButtonProps> = ({
  className,
  children,
  typeIcon,
  isDisabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames('Button', className, {
        Button__disabled: isDisabled,
      })}
      data-testid='test-button'
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {typeIcon && <Icon type={typeIcon} data-testid='test-button-icon' />}
      <span className={typeIcon ? 'Button-Text' : ''}>{children}</span>
    </button>
  )
}

export const Button = memo(ButtonComponent)
