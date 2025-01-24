interface BaseIconProps {
  icon: string;
  iconHexColor?: string;
  size?: number;
}

/**
 * BaseIcon component
 * @param icon icon names avaible at https://fonts.google.com/icons?icon.size=24&icon.color=%2380A4AE&icon.style=Rounded
 * @param iconHexColor hex color
 * @param size rem units
 * @returns
 */
function BaseIcon({ icon, iconHexColor, size = 1.5 }: BaseIconProps) {
  return (
    <span
      className="material-symbols-rounded"
      style={{
        ...(iconHexColor && { color: iconHexColor }),
        fontSize: `${size}rem`,
      }}
      aria-hidden="true"
    >
      {icon}
    </span>
  );
}

export default BaseIcon;
