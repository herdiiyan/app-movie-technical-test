import { Provider } from 'react-redux';
import AppNavigation from './navigation/appNavigation';
import storeState from './redux/store';

export default function App() {
  return (
    <Provider store={storeState} >
      <AppNavigation />
    </Provider>
  );
}
