import {RoutesList} from './routes';
import {useTheme} from 'shared/hooks';

function App() {
  useTheme();

  return (
    <div className="app">
      <RoutesList />
    </div>
  )
}

export default App
