import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { Route, Switch } from 'react-router-dom'
import FrontPage from './containers/fontpage';
import FullPost from './components/FullPost';

function App() {
  return (
    <Provider store={store}>
      <div className="App" >
        <Switch>
          <Route path='/blog-post-application/' exact component={FrontPage} />
          <Route path='/blog-post-application/fullpost' exact component={FullPost} />
          <Route path='*' exact component={Error} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
