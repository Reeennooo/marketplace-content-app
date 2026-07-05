import {Container} from '../Container/Container.tsx';
import type {FC, ReactNode} from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Wrapper: FC<Props> = (props) => {
  const {children, className} = props;
  return (
    <div className={`bg-surface/40 py-6 rounded-t-2xl rounded-tr-2xl ${className}`}>
      <Container>
        {children}
      </Container>
    </div>
  );
};