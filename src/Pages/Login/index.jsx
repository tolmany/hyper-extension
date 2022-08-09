import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "../../utilities";
import Header from "../../Common/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isCheck, setCheck] = useState(false);
  const [isDiasbled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const HYPER_API_BASE_URL =
    process.env.HYPER_API_BASE_URL || "https://hyper-api-proto.herokuapp.com";

  useEffect(() => {
    if (isEmpty(email) || isEmpty(password)) setDisabled(true);
    else setDisabled(false);
  }, [email, password]);

  useEffect(() => {
        const queryInfo = {active: true, lastFocusedWindow: true};

        // eslint-disable-next-line no-undef
        chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
          const url = tabs[0].url;
            setUrl(url);
        });
  }, [])

  const handleSubmit = async () => {
    setLoading(true);
    try {

      const { data } = await axios.post(`${HYPER_API_BASE_URL}/api/auth/signin`, {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      const isAmazon = url.includes("amazon.com");
      if (isAmazon) {
        navigate("/help")
      } else {
        navigate("/nothing");
      }
    } catch (error) {
      const message =
        error.response && error.response.data.message ? error.response.data.message : error.message;
      setError(message);
    }
    setLoading(false);

  };

  return (
    <div className="w-full h-[544px] bg-[#F0F3F4]  flex flex-col items-center select-none ">
      <Header />
      <div className="mt-10 w-3/5 h-4/5 flex justify-center">
        <div>
          <div className="text-3xl mb-8 font-bold">Log in</div>
          {error && (
            <div
              className="flex p-2 mb-4 text-sm text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>{error}</div>
            </div>
          )}
          <input
            type={"email"}
            className="w-[420px] text-sm h-9 p-2 border border-gray-300 focus:outline-hyper-dark-blue mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <div className="relative mt-5">
            <input
              type={show ? "text" : "password"}
              className="w-[420px] text-sm h-9 p-2  pr-10 border border-gray-300 focus:outline-hyper-dark-blue"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
            <span className="absolute inset-y-0 right-2 flex items-center">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <AiFillEyeInvisible className="text-xl" />
                ) : (
                  <AiFillEye className="text-xl" />
                )}
              </button>
            </span>
          </div>
          <div className="mt-2 flex items-center ">
            <input
              checked={isCheck}
              onChange={() => setCheck(!isCheck)}
              id="bordered-checkbox-2"
              type="checkbox"
              name="bordered-checkbox"
              className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-checkbox-2"
              className="py-4 ml-2 w-full text-sm font-medium text-gray-600  cursor-pointer"
            >
              Switch to the suggested server if you are in mainland China.{" "}
            </label>
          </div>
          {
            !isLoading ? 
          <button
            onClick={() => handleSubmit()}
            className={
              (isDiasbled ? "bg-gray-500" : "bg-hyper-dark-blue") + ` w-[420px] h-9 text-white text-sm mt-5`
            }
            disabled={isDiasbled}
          >
            Log in
          </button>
            :
            <button
              onClick={() => handleSubmit()}
              className={
                `bg-hyper-blue w-[420px] h-9 text-white text-sm mt-5 flex items-center justify-center cursor-not-allowed`
              }
              disabled={isDiasbled}
            >
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </button>
          }
          <div className="w-full flex justify-center">
          <a
            href="https://hyper-suite.vercel.app/forgot-password"
            target={"_blank"}
            rel="noreferrer"
            className="text-sm text-gray-500 w-fit cursor-pointer mt-5 "
          >
            Forgot your password?
          </a>
          </div>
        </div>
      </div>
      <div className="h-1/5 flex justify-center items-center border-t border-t-gray-300 w-full">
        <div className="text-base">
          Don't have an account?{" "}
          <a
            href="https://hyper-suite.vercel.app/register"
            target={"_blank"}
            rel="noreferrer"
            className="text-hyper-dark-blue"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
