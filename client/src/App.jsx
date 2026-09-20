import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import Main from './components/main'
import axios from "axios"

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getAPI = async () => {
      try {
        const { data } = await axios.get("http://localHost:5000");
        setData(data)
      } catch (err) {
        console.error(err)
      }
      // console.log(data)
    }
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
      <Main />
      <Footer />
    </>
  )
}

export default App