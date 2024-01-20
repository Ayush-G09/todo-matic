import { ButtonProps } from '../types/Button'
import '../styles/assets.css'
import { ButtonCon, ButtonIcon, ButtonTitle } from '../styles/Button'

function Button({width, height, variant = 'primary', title, icon, iconPosition = 'left', active = true, onClick}: ButtonProps) {
  return (
    <ButtonCon width={width} height={height} variant={variant} iconPosition={iconPosition} active={active} onClick={onClick}>
        {icon && <ButtonIcon className={icon}></ButtonIcon>}
        {title && <ButtonTitle>{title}</ButtonTitle>}
    </ButtonCon>
  )
}

export default Button