import {Layout} from 'shared/ui/Layout/Layout.tsx';
import {Container} from 'shared/ui/Container/Container.tsx';

export const Home = () => {
  return (
    <Layout>
      <Container className="flex flex-col gap-4 pt-4">
        <div>Привет!</div>
      </Container>
    </Layout>
  );
};