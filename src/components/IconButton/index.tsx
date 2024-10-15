import { Icons } from '@/models';

type Props = {
  ariaLabel: string;
  className?: string;
  label?: string;
  leftIcon?: keyof typeof Icons;
  rightIcon?: keyof typeof Icons;
  onClick: () => void;
};

function IconButton({
  ariaLabel,
  className,
  label,
  leftIcon,
  rightIcon,
  onClick,
}: Props) {
  return (
    <button
      className={`flex gap-2 text-blue-500 ${className || ''}`.trim()}
      type="button"
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
