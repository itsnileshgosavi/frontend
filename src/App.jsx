import { Sidebar } from "lucide-react"
import Header from "./components/Header"
import { Button } from "./components/ui/button"
import { useState } from "react"
import { Outlet } from "react-router-dom"

function App() {


  return (
    <>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Outlet />
    </>
  )
}

export default App
