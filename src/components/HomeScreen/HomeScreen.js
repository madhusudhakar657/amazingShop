import Product from "./Product/Product";
import Slider from "./Slider";
// notif
import { Flip, ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// axios
import axios from "../../API_FakeStore/axios";
import requests from "../../API_FakeStore/requests";
// UI
import "./HomeScreen.scss";
import Banner from "../../assets/banner/prime-day-product-banner.jpg";
import { Fragment, useEffect, useState } from "react";

function HomeScreen() {
  // get products from API
  const [products, setProducts] = useState([]);

  // notif
  const showNotif = (text) => {
    toast.error(text, {
      theme: "dark",
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    // abort control
    const abortCont = new AbortController();
    async function fetch() {
      try {
        const res = await axios.get(`${requests.fetchAllProducts}?limit=`, {
          signal: abortCont.signal,
        });
        if (res.status !== 200) throw Error("Something Went Wrong !");
        const data = await res.data;
        setProducts(data);
      } catch (err) {
        showNotif(err.message);
      }
    }
    fetch();
    return () => abortCont.abort();
  }, []);

  return (
    <div>
      <Slider />
      <ToastContainer
        transition={Flip}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        limit={3}
      />
      <div className="homeScreen__wrapper flex flex-column justify-center items-center mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4  mx-2">
          {products?.length ? (
            products.map((p, index) => {
              return (
                <Fragment key={p?.id}>
                  {index === 4 ? (
                    <img
                      loading="lazy"
                      src={Banner}
                      alt="Prime day"
                      className="homeScreen__productsBanner img-fluid "
                    />
                  ) : null}
                  

                  <Product
                    id={p?.id}
                    category={p?.category}
                    description={p?.description}
                    title={p?.title}
                    price={p?.price}
                    rating={p?.rating.rate}
                    image={p?.image}
                  />
                </Fragment>
              );
            })
          ) : (
            <div className="loader__wrapper">
              <span className="loader position-fixed"></span>
            </div>
          )}
        </div>

        {products ? (
          <a
            href="#top"
            className="homeScreen__back d-block text-decoration-none px-4 py-3 text-white text-center my-3"
          >
            Back to top
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default HomeScreen;
