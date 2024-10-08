import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import BottomNavbar from "./components/BottomNav"

function App() {


  return (
    <>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Outlet />
      <BottomNavbar /> 
    </>
  )
}

export default App
