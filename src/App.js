import logo from './logo.svg';
import './App.css'; 
import { createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
