import {Text} from '../Text/Text.tsx';

interface IProps {
  title: string
}

export const PageTitle = (props: IProps) => {
  const {title} = props;
  return (
    <div className="
      py-4
      px-6
    ">
      <Text
        children={title}
        variant={'h1'}
      />
    </div>
  );
};