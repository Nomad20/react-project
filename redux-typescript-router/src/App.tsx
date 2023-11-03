import './App.css'
import { Route, Routes } from 'react-router'
import { Nav } from './components/Nav'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationFormStudent'
import MyAccount from './components/MyProfile'
import MiniProfile from './components/MiniProfiles'
import Box from './components/Box'
import { Router, Navigation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import JoinUs from './components/JoinUs'
import RegistrationFormStudent from './components/RegistrationFormStudent'
import RegistrationFormTrainer from './components/RegistrationFormTrainer'
import Home from './components/Home'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/joinus" element={<JoinUs/>} />
        <Route path="/dashboard" element={<MyAccount/>} />
        <Route path="/profile" element={<MiniProfile/>} />
        <Route path="/myaccount" element={<MyAccount/>} />
        <Route path="/registerStudent" element={<RegistrationFormStudent/>} />
        <Route path="/registerTrainer" element={<RegistrationFormTrainer/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
