import React from 'react'

// Dependencias
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Componentes
import NewAccount from 'pages/NewAccount'
import Login from 'pages/Login'
import Main from 'pages/Main'
import Layout from 'components/Layout'

// Context
import AppService from 'context/AppService'

function App() {
    return (
        <AppService>
            <Router>
                <Switch>
                    <Layout>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                        <Route exact path='/'>
                            <Login />
                        </Route>
                        <Route exact path='/new-account'>
                            <NewAccount />
                        </Route>
                        <Route exact path='/main'>
                            <Main />
                        </Route>
                    </Layout>
                </Switch>
            </Router>
        </AppService>
    )
}

export default App
