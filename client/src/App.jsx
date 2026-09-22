import { useEffect, useState } from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import Main from './pages/main'
import axios from "axios"
import Login from './pages/login'
import Settings from './pages/settings'
import Notes from './pages/Notes'
import StarNote from './pages/starNotes'

function App() {
  const [data, setData] = useState([])
  const getAPI = async () => {
    try {
      const { data } = await axios.get("http://localHost:5000");
      setData(data)
    } catch (err) {
      console.error(err)
    }
    // console.log(data)
  }
  useEffect(() => {
    getAPI();
  }, [])
  useEffect(() => {

    if (data.length != 0) {
      console.log(data)
    }
  }, [data])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main onNoteAdded={getAPI} />}/>
        <Route path='/Notes' element={<Notes onNoteAdded={getAPI} />}/>
        <Route path='/StarNotes' element={<StarNote onNoteAdded={getAPI} />}/>
        <Route path='/Settings' element={<Settings onNoteAdded={getAPI} />}/>
        <Route path='/Login' element={<Login onNoteAdded={getAPI} />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App