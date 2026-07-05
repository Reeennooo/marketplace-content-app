import {PageTitle} from 'shared/ui/PageTitle/PageTitle.tsx';
import {Button} from 'shared/ui/Button/Button.tsx';
import {Layout} from 'shared/ui/Layout/Layout.tsx';
import {Container} from 'shared/ui/Container/Container.tsx';


export const Registration = () => {
  // const submitRegistrationForm = useCallback(() => {
  //   userFormRef.current?.submitForm();
  // }, [userFormRef]);

  return (
    <Layout
      header={<PageTitle title="Регистрация" />}
      footer={
        <Button
          text={'Зарегистрироваться'}
          onClick={() => {}}
          // onClick={submitRegistrationForm}
        />
      }
    >
      <Container>
        Регистрация
      </Container>
    </Layout>
  );
};