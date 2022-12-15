import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
