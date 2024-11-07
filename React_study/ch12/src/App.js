import {Provider } from 'react-redux'
//import Counter from './NonToolkit/Counter';
//import storeNonToolkit from './NonToolkit/store'
import storeUseToolkit from './UseToolkit/store';
import Counter from './UseToolkit/Counter';
import User from './UseToolkit/User'

function App() {
  return (
    <Provider store={storeUseToolkit}>
      <Counter />
      <User/>
      </Provider>
    )
  ;
}

export default App;
