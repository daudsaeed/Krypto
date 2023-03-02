import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const handleSubmit = () => {
  setIsLoading(true);
};

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
  };
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col justify-center md:p-20 py-12 px-4 ">
        {/* Welcome Text left side....*/}
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="font-poppins capitalize text-3xl sm:text-5xl text-white text-gradient py-1">
            Send crypto <br /> accross the world
          </h1>

          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>

          <button className="flex flex-row rounded-full justify-center items-center bg-[#2952e3] py-1 my-2 hover:bg-[#2546bd] cursor-pointer">
            <p className="font-semibold text-base text-white">Connect Wallet</p>
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        {/* Left side card and the form */}
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0  mt-10 ">
          {/* Card */}
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-48 sm:w-96 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full ">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>

              <div>
                <p className="font-light text-white text-sm">Address</p>
                <p className="font-semibold text-white text-sm my-1">
                  Etherium
                </p>
              </div>
            </div>
          </div>

          {/* form  */}

          <div className="p-5 sm:w-96 w-full flex-col justify-start items-center blue-glassmorphism">
            <Input
              type="text"
              handleChange={() => {}}
              name="toAddress"
              placeholder={"Address To"}
            />

            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={() => {}}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={() => {}}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2"></div>
            {isLoading ? (
              <Loader />
            ) : (
              <button
                className="text-white border-[1px] w-full rounded-full p-2 border-[#3d4f7c] cursor-pointer"
                type="button"
                onClick={handleSubmit}
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
