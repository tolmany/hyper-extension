import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Evaluate1 from "../../Assets/img/Evaluate1.png";
import Evaluate2 from "../../Assets/img/Evaluate2.png";

const ExtensionDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
		const token = localStorage.getItem('userInfo')
			? JSON.parse(localStorage.getItem('userInfo'))
			: null
		if (token) {
			navigate('/nothing')
		}
	}, [navigate])

  return (
    <div className="w-full bg-[#F0F3F4]"> 
      <div className="w-full flex justify-center items-center flex-col p-4">
        <div className="text-3xl  text-gray-800 my-6">Evaluate new ideas as you browse</div>
        <div className="flex w-full">
          <div className="w-[50%]">
            <img src={Evaluate1} className="h-[220px] object-cover" alt="Evaluate1" />
          </div>
          <div className="w-[50%]">
            <img src={Evaluate2} className="h-[220px] object-cover" alt="Evaluate2" />
          </div>
        </div>
        <div className="mt-4">
          <div className="text-xl text-primary">
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
            <button className="w-56 h-10 bg-primary text-white hover:bg-sky-500 text-lg tracking-wider">
              Sign up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExtensionDetails;
