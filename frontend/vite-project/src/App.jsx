import { Route, Routes,  } from "react-router-dom"
import Home from "./page/Home"
import Header from "./components/Header"
import About from "./page/About"
import Menu from "./page/Menu"
import Cart from "./page/Cart"
import Sidebar from "./components/Sidebar"
import Dashboard from "./page/Dashboard"
import AddProductForm from "./page/AddProductForm"
import Product from "./page/Product"
import Blog from "./page/Blog"
import Contact from "./page/Contact"
import Footer from "./page/Footer"
import OrdersTable from "./page/OrdersTable"

const App=()=>{
  return(
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/AddProductForm" element={<AddProductForm/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/ordersTable" element={<OrdersTable/>} />
      </Routes>
    </>
  )

}
export default App