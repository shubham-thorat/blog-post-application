import './App.css';
import FetchData from './components/Form/FetchData';
import Posts from './components/Posts/Posts';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App" >
        <div className="app-item" style={{ width: "75%" }}>
          <Posts />
        </div>
        <div className="app-item" style={{ width: "25%" ,padding:" 0 10px",backgroundColor:"rgb(153, 131, 202)"}}>
          <FetchData />
        </div>
      </div>
    </Provider>
  );
}

export default App;
