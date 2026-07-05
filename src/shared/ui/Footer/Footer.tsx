import {type FC, memo, type ReactNode, type Ref} from 'react';
import {Container} from '../Container/Container.tsx';

interface IProps {
  children: ReactNode;
  innerRef?: Ref<HTMLElement>;
}

export const Footer: FC<IProps> = memo((props) => {
  const {children, innerRef} = props;
  return (
    <footer
      className="
      w-full
      bg-background
      pt-4
      pb-10
      fixed
      bottom-0
      "
      ref={innerRef}
    >
      <Container>
        {children}
      </Container>
    </footer>
  );
});