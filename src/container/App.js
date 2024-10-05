import HomeScreen from "../components/HomeScreen/HomeScreen";
import CheckoutScreen from "../components/CheckoutScreen/CheckoutScreen";
import OrderList from "../components/OrderList/OrderList";
import Navbar from "../components/HomeScreen/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductInfo from "../components/HomeScreen/Product/productInfo";
import Dialog from "../components/customComponents/dialog";
import { useState } from "react";

function App() {
  const [isDialogOpenForAddress, setIsDialogOpenForAddress] = useState(false)
  const [address, setAddress] = useState("Hyderbad 500044")


  return (
    <Router>
      <div className="app" style={{ overflow: "hidden" }}>
        <Navbar updateAddress={address} onOpen={()=>setIsDialogOpenForAddress(true)}/>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/checkout" element={<CheckoutScreen />} />
          <Route exact path="/order" element={<OrderList />} />
          <Route exact path="/productDetails" element={<ProductInfo/>} />
          {/* 404 page */}
        </Routes>
        <Dialog isOpen={isDialogOpenForAddress} onClose={() => setIsDialogOpenForAddress(false)}>
        <h2>Select Your Deliver Location</h2>
        <label htmlFor="address">Enter Your Location Or Pincode</label>
        <input placeholder="Enter Location Or Pincode" type="text" onChange={(e) => setAddress(e.target.value)} />
        <button onClose={() => setIsDialogOpenForAddress(false)}>Close</button>
      </Dialog>

      </div>
    </Router>
  );
}

export default App;
