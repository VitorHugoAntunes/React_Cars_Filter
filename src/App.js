import './styles/global.css'

import HomePage from './pages/HomePage';
import {FormDataContextProvider} from './contexts/FormContext';

function App() {
  return (
    <div className="App">
      <FormDataContextProvider>
        <HomePage />
      </FormDataContextProvider>
    </div>
  );
}

export default App;
