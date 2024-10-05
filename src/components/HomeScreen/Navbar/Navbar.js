import React, { useState } from "react";
import BottomNav from "./BottomNav/BottomNav";
import { Link } from "react-router-dom";
// context
import { useStateValue } from "../../../StateContext/StateProvider";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// UI
import { MdSearch } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import Logo from "../../../assets/Logo/logo.PNG";
import flag from "../../../assets/flag/um.svg";
import Dialog from "../../customComponents/dialog";
import "./Navbar.scss";


const listOptions = [
  { value: "search-alias-alexa-skills", id: 1, name: "Alexa Skills" },
  { value: "search-alias-amazon-devices", id: 2, name: "Amazon Devices" },
  { value: "search-alias-fashion", id: 3, name: "Amazon Fashion" },
  { value: "search-alias-nowstore", id: 4, name: "Amazon Fresh" },
  { value: "search-alias-freshmeat", id: 5, name: "Amazon Fresh Meat" },
  { value: "search-alias-pharmacy", id: 6, name: "Amazon Pharmacy" },
  { value: "search-alias-appliances", id: 7, name: "Appliances" },
  { value: "search-alias-mobile-apps", id: 8, name: "Apps & Games" },
  { value: "search-alias-audible", id: 9, name: "Audible Audiobooks" },
  { value: "search-alias-baby", id: 10, name: "Baby" },
  { value: "search-alias-beauty", id: 11, name: "Beauty" },
  { value: "search-alias-stripbooks", id: 12, name: "Books" },
  { value: "search-alias-motorcycle", id: 13, name: "Car & Motorbike" },
  { value: "search-alias-apparel", id: 14, name: "Clothing & Accessories" },
  { value: "search-alias-collectibles", id: 15, name: "Collectibles" },
  { value: "search-alias-computers", id: 16, name: "Computers & Accessories" },
  { value: "search-alias-todays-deals", id: 17, name: "Today's Deals" },
  { value: "search-alias-electronics", id: 18, name: "Electronics" },
  { value: "search-alias-furniture", id: 19, name: "Furniture" },
  { value: "search-alias-lawn-garden", id: 20, name: "Garden & Outdoors" },
  { value: "search-alias-gift-cards", id: 21, name: "Gift Cards" },
  { value: "search-alias-grocery", id: 22, name: "Grocery & Gourmet Foods" },
  { value: "search-alias-hpc", id: 23, name: "Health & Personal Care" },
];


function Navbar({onOpen,updateAddress}) {
  // context setup
  const [{ basket }] = useStateValue();
  // Auth0 setup
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
  const [isDialogOpenForAddress, setIsDialogOpenForAddress] = useState(false)
  // const [address, setAddress] = useState("Hyderbad 500044")
  return (
    
      <div id="top" className="w-100">
        <div className="navbar flex justify-around items-center w-full m-0 p-0 position-static">
          <div className="w-2/7 ml-4 mt-1 flex justify-center  items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="Amazon Logo"
                title="Amazon Clone Home Page"
                className=" m-2 w-28"
              />
            </Link>
            <div
              className="d-none d-md-flex  mx-3"
              style={{ cursor: "pointer", fontSize: "13px" }}
            >
              <div className="text-white align-self-center">
                <IoLocationOutline className="fs-4 mb-1" />
              </div>
              <div className="d-flex flex-column" onClick={() => onOpen()}>
                <span className="text-slate-400 font-semibold">Deliver to {updateAddress}</span>
                <span className="text-white fw-bold">Update Location</span>
              </div>
            </div>
          </div>
          <div className="w-3/7 navbar__search flex justify-center mt-1 d-flex outline-2 outline-orange-500">
            <select onChange={() => { }} name="dpOptions" id="dpOptions" className="w-auto outline-none pl-2 rounded-l-lg bg-slate-300">
              {
                listOptions.map((option, index) => {
                  return <option className="font-semibold w-auto" key={option.id} value={option.value}>{option.name}</option>
                })
              }
            </select>
            <input
              placeholder="Search In Amazon ..."
              type="text"
              className="navbar__searchInput text-black bg-white w-8/12 border-0 rounded-l-none px-2"
            />
            <MdSearch className="navbr__searchIcon text-dark" />
          </div>
          <div className="w-2/7 flex justify-center">
            <div
              className=" mt-2 flex justify-center d-none d-md-block"
              style={{ maxWidth: "25px", width: "25px", cursor: "pointer" }}
            >
              <img src={flag} alt="" />
            </div>

            <div className="mx-4 nav__options flex justify-around">
              <div className="nav__optionsMobile mx-3 text-light d-flex flex-column justify-content-center">
                {isAuthenticated ? (
                  <>
                    <span className="nav__optionsFirstLine">
                      Hello {user?.given_name}
                    </span>
                    <span style={{ cursor: "pointer" }} onClick={() => logout()}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <span className="nav__optionsFirstLine">Account</span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => loginWithPopup()}
                    >
                      Sign In
                    </span>
                  </>
                )}
              </div>
              <Link
                to="/Order"
                className="text-decoration-none mx-3 text-light d-flex flex-column justify-content-center"
              >
                <span className="nav__optionsFirstLine">Returns</span>
                <span>& Orders</span>
              </Link>

              <Link
                to="/checkout"
                className="text-decoration-none ms-2 me-3 text-light position-relative d-flex flex-column"
              >
                <HiOutlineShoppingCart className="fs-2" />
                <span className="nav__optionNumber position-absolute fw-bold rounded-pill px-1">
                  {basket.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
  );
}

export default React.memo(Navbar);
