import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import {Container} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header></Header>
    
        <main>
          <Container>
            <Outlet></Outlet>
          </Container>
        </main>
      <h1>app</h1>
      </div>
  )
}

export default App