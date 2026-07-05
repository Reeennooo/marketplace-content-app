import {type FC, memo, type SVGAttributes, useMemo} from 'react';
import {IconSize, type IconSizeType} from './types.ts';
import Cross from '../../assets/icons/cross.svg?react';
import Warning from '../../assets/icons/warning.svg?react';
import Settings from '../../assets/icons/settings.svg?react';
import ArrowTop from '../../assets/icons/arrow-top.svg?react';
import Camera from '../../assets/icons/camera.svg?react';
import Clock from '../../assets/icons/clock.svg?react';

export type IconList =
  'cross'
  | 'settings'
  | 'arrow-top'
  | 'camera'
  | 'clock'
  | 'warning';

interface IProps {
  name: IconList;
  properties?: SVGAttributes<unknown>;
  size?: IconSizeType
}

export const Icon: FC<IProps> = memo(function Icon(props) {
  const { name, properties = {}, size } = props

  const sizePx = useMemo(() => {
    switch (size) {
    case IconSize.large:
      return 24
    case IconSize.medium:
      return 20
    case IconSize.small:
      return 16
    case IconSize.extraSmall:
      return 12
    }
    return undefined
  }, [size])

  if (sizePx) {
    properties.width = sizePx;
    properties.height = sizePx;
  }

  switch (name) {
  case 'cross':
    return <Cross {...properties} />;
  case 'warning':
    return <Warning {...properties} />;
  case 'settings':
    return <Settings {...properties} />;
  case 'arrow-top':
    return <ArrowTop {...properties} />;
  case 'camera':
    return <Camera {...properties} />;
  case 'clock':
    return <Clock {...properties} />;
  }
});