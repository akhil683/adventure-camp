import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}
//EXPLORE NATURE WITH [BRAND NAME]
export default App
