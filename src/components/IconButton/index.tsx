import BaseIcon from '../BaseIcon';
import './style.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ariaLabel: string;
  className?: string;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

function IconButton({
  ariaLabel,
  className,
  label,
  leftIcon,
  rightIcon,
  variant = 'primary',
  type = 'button',
  onClick,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`
        icon-button
        ${variant == 'primary' && 'icon-button--primary'}
        ${variant == 'secondary' && 'icon-button--secondary'}
        ${className || ''}
      `.trim()}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {leftIcon && <BaseIcon icon={leftIcon} size={1.25} />}
      {label && <span>{label}</span>}
      {rightIcon && <BaseIcon icon={rightIcon} size={1.25} />}
    </button>
  );
}

export default IconButton;
