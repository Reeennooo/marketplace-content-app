import type {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = (props) => {
  const {children, className} = props;
  return (
    <div className={
      `
        px-6
        mx-auto
        w-full
        ${className}
      `
    }>
      {children}
    </div>
  );
};