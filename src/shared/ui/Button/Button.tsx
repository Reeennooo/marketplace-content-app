import {type FC, memo} from 'react';
import {Text} from '../Text/Text.tsx';
import {SquircleWrap} from '../SquircleWrap/SquircleWrap.tsx';

interface IProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const Button: FC<IProps> = memo((props) => {
  const {text, className, onClick} = props;
  const onClickCustom = () => {
    onClick();
  }

  return (
    <SquircleWrap>
      <button
        onClick={onClickCustom}
        className={
          `
      w-full
      py-4
      px-5
      rounded-2xl
      bg-primary
      active:scale-95 transition-transform duration-150
      select-none
      ${className}
      `
        }>
        <Text
          children={text}
          weight={'semibold'}
          color={'onPrimary'}
        />
      </button>
    </SquircleWrap>
  );
});