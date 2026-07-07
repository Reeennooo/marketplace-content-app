import {Layout} from 'shared/ui/Layout/Layout.tsx';
import {Container} from 'shared/ui/Container/Container.tsx';
import {Button} from 'shared/ui-kit/button.tsx';

export const Home = () => {
  return (
    <Layout>
      <Container className="flex flex-col gap-4 pt-4">
        <div>Привет!</div>
        <Button variant='secondary'>SCHD</Button>
        <Button variant='outline'>SCHD</Button>
        <div className="bg-primary text-primary-foreground p-4">
          TEST
        </div>
      </Container>
    </Layout>
  );
};