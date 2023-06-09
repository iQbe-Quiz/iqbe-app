import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Search from "../pages/search"
import Favorite from "../pages/favorite"
import DefaultLayout from "./default"
import DraftLayout from "./draft"

export default function Root() {
  const location = useLocation()
  const requiredLogin = location.pathname !== '/login'

  const Layout = requiredLogin ? DefaultLayout : DraftLayout

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/favorite" element={<Favorite />}/>
        <Route path="/login" element={<Login />}/>
      </Route>
    </Routes>
  )
}