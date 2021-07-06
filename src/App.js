import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Callback from './Callback'

function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    console.log('App Effect')
  }, [])


  return (
    <div className="d-flex h-400 text-center text-white bg-dark" style={{height: '100vh'}}>
      <div className="cover-container d-flex w-800 h-400 p-3 mx-auto flex-column">
        <header className="mb-5">
          <div>
            <h3 className="float-md-start mb-0">My App</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </nav>
          </div>
        </header>
        <main>
          <BrowserRouter>
            <Switch>
              <Route 
                path="/" 
                render={ () => 
                  <Home user={user}/>
                }
                exact 
              />
              <Route 
                path="/callback" 
                render={ (props) => 
                  <Callback {...{...props, onSuccess: setUser}} />
                }
                exact
              />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
}

export default App;
