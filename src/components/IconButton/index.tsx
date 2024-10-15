import { Icons } from '@/models';
import './style.css';

type Props = {
  ariaLabel: string;
  className?: string;
  label?: string;
  leftIcon?: keyof typeof Icons;
  rightIcon?: keyof typeof Icons;
  style?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

function IconButton({
  ariaLabel,
  className,
  label,
  leftIcon,
  rightIcon,
  style = 'primary',
  type = 'button',
  onClick,
}: Props) {
  return (
    <button
      className={`icon-button ${style == 'primary' && 'icon-button--primary'} ${style == 'secondary' && 'icon-button--secondary'} ${className || ''}`.trim()}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {leftIcon && <span aria-hidden>{Icons[leftIcon]}</span>}
      {label && <span>{label}</span>}
      {rightIcon && <span aria-hidden>{Icons[rightIcon]}</span>}
    </button>
  );
}

export default IconButton;
