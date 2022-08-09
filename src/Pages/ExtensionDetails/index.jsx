import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../Common/Header"

import Evaluate1 from "../../Assets/img/Evaluate1.png";
import Evaluate2 from "../../Assets/img/Evaluate2.png";
import { getParamsFromUrl } from "../../utilities";



const ExtensionDetails = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
   /**
     * Get current URL
     */
  useEffect(() => {
    const token = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null;
    
    const queryInfo = {active: true, lastFocusedWindow: true};

    // eslint-disable-next-line no-undef
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      const isAmazon = url.includes("amazon.com");
      if (token) {
        if (isAmazon) {
          const productKey = getParamsFromUrl(url);
          if (productKey !== null) {
            navigate("/mainpage") 
          } else {
            navigate('/help')
          }
        }
        else {
          navigate('/nothing')
        }
      }
      setUrl(url);
    });
	}, [navigate, url])




  return (
      <div className="w-full bg-[#F0F3F4]" > 
        <Header />
        <div className="w-full flex justify-center items-center flex-col p-4">
          <div className="text-3xl  text-gray-800 my-6">Evaluate new ideas as you browse</div>
          <div className="flex w-full justify-center gap-12">
            <div>
              <img src={Evaluate1} className="h-[220px] object-cover" alt="Evaluate1" />
            </div>
            <div>
              <img src={Evaluate2} className="h-[220px] object-cover" alt="Evaluate2" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-xl text-hyper-dark-blue">
              Create a FREE account to access our Browser Extension 
            </div>
            <div className="mt-4 ">
              <ul className="list-disc pl-8 text-sm gap-2 flex flex-col">
                <li>Explore and validate product opportunities (limit: 50 product searches) </li>
                <li>
                  Find the Best Seller Rank of product in your market space (limit: 50 ASIN lookups){" "}
                </li>
                <li>
                  Leverage our insights to make informed decisions for your Amazon business (limit: 50
                  Browser Extension scans)
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex gap-8 justify-end w-full">
            <Link to={"/login"}>
              <button
                type="button"
                className="w-56 h-10 border border-gray-700 hover:bg-slate-300 text-lg tracking-wider	"
              >
                Login
              </button>
            </Link>
            <a href="https://hyper-suite.vercel.app/register" target={"_blank"} rel="noreferrer">
              <button className="w-56 h-10 bg-hyper-dark-blue text-white hover:bg-sky-500 text-lg tracking-wider">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>
  );
};

export default ExtensionDetails;
