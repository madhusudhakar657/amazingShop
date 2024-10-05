import React from "react";
import Offcanvas from "./Offcanvas";
// UI
import "./BottomNav.scss";
import { IoMdMenu } from "react-icons/io";

const bottomBarOptions = [
  { name: "All", id: 1, value: "all" },
  { name: "Fresh", id: 2, value: "fresh" },
  { name: "MX Player", id: 3, value: "mx-player" },
  { name: "Sell", id: 4, value: "sell" },
  { name: "Best Sellers", id: 5, value: "best-sellers" },
  { name: "Today's Deals", id: 6, value: "todays-deals" },
  { name: "Mobiles", id: 7, value: "mobiles" },
  { name: "Electronics", id: 8, value: "electronics" },
  { name: "Prime", id: 9, value: "prime" },
  { name: "Home & Kitchen", id: 10, value: "home-kitchen" },
  { name: "Customer Service", id: 11, value: "customer-service" },
  { name: "Fashion", id: 12, value: "fashion" },
  { name: "New Releases", id: 13, value: "new-releases" }
];

function BottomNav() {
  return (
    <div className="bottom__nav w-100 d-flex align-items-center p-2">
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#bottomNavCanvas"
        aria-controls="bottomNavCanvas"
        className="bottom__navAll p-1 ms-2 ms-sm-0 rounded text-white fw-bold d-flex align-items-center"
      >
        <IoMdMenu className="fs-4 me-1" />
        <span>All</span>
      </div>
      <Offcanvas />
      <div className="bottom_navItems text-white">
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <div className="d-sm-inline-block d-none">
          {bottomBarOptions?.map((n,index)=>{
            return <span key={n?.id}>{n?.name}</span>
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(BottomNav);
