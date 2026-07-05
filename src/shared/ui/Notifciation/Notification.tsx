import { useEffect, useState } from 'react';
import {SquircleWrap} from '../SquircleWrap/SquircleWrap.tsx';
import {Icon} from '../Icon/Icon.tsx';
import type {INotificationProps} from './types.ts';

const typeStyles = {
  success: 'fill-success',
  error: 'fill-error',
  warning: 'fill-warning',
};

export const Notification = ({ text, type, className = '', duration, onClose }: INotificationProps) => {
  const [visible, setVisible] = useState(false); // ← стартуем с false

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setVisible(true);
    }, 10); // "вход" через один тик

    const exitTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 300); // Подождать завершения анимации
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`transition-all duration-300 overflow-hidden ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } ${className}`}
    >
      <SquircleWrap
        cornerRadius={20}
        className={`px-5 h-16 flex gap-2 items-center text-on-primary w-[calc(100vw-48px)] max-w-sm bg-primary`}
      >
        <div className="relative">
          <Icon
            name={'warning'}
            properties={{
              className: `size-6 ${typeStyles[type]}`,
            }}
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-8 bg-red-500 blur-[30px] rounded-full"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-32 bg-red-500 blur-[175px] rounded-full"></div>
        </div>
        <p className="text-md">{text}</p>
      </SquircleWrap>
    </div>
  );
};
