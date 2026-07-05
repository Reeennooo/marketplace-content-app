import {type FC, memo} from 'react';
import {Icon, type IconList} from '../Icon/Icon.tsx';
import {IconSize, type IconSizeType} from '../Icon/types.ts';

type Size = "small" | "normal";
type Style = "primary" | "secondary" | 'surface';

interface IProps {
  icon: IconList;
  size: Size;
  style: Style;
  className?: string;
  onClick?: () => void;
}

const buttonSizeClasses: Record<Size, string> = {
  small: "w-8 h-8",
  normal: "w-12 h-12",
};

const iconSize: Record<Size, IconSizeType> = {
  small: IconSize.small,
  normal: IconSize.large,
}

const backgroundColor: Record<Style, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  surface: 'bg-surface'
}

const iconColor: Record<Style, string> = {
  primary: 'fill-on-primary',
  secondary: 'fill-text',
  surface: 'fill-text'
}

export const CircleButton: FC<IProps> = memo((props) => {
  const {icon, className, onClick, size, style} = props;
  const onClickCustom = () => {
    onClick?.();
  }

  return (
    <button
      onClick={onClickCustom}
      className={
        `
        flex
        items-center
        justify-center
        rounded-full
        active:scale-95 transition-transform duration-150
        select-none
        ${backgroundColor[style]}
        ${buttonSizeClasses[size]}
        ${className}
      `
      }>
      <Icon
        name={icon}
        size={iconSize[size]}
        properties={{
          className: `${iconColor[style]}`
        }}
      />
    </button>
  );
});