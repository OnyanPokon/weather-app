import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

function Homepage() {
  return (
    <section className="h-screen bg-white flex lg:flex-row flex-col ">
      <div className="lg:flex-[1] bg-slate-200 flex flex-col items-center">
        <form className="flex items-center justify-center w-full p-6">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border text-gray-900 text-xs rounded-full focus:outline-none block w-full ps-5 p-3 hover:shadow-xl transition-shadow duration-500"
              placeholder="Search branch name..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-lg font-medium text-white bg-slate-500 rounded-full border hover:bg-slate-600 transition-colors duration-500 focus:outline-none focus:bg-slate-600"
          >
            <HiOutlineSearch />
            <span className="sr-only">Search</span>
          </button>
        </form>
        <img src="/images/sunny.png" alt="" className="w-2/4" />
        <div className="flex mt-8">
          <span className="text-[6rem] font-extralight leading-none">31</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 112 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="56.5"
              cy="54.5"
              r="46"
              stroke="black"
              strokeWidth="20"
            />
          </svg>
          <span className="leading-none text-[3rem]">C</span>
        </div>
        <p>Mostly Cloudly</p>
        <hr className="w-full bg-slate-700 border-[1px] border-slate-300 max-w-xs mt-6" />
        <div className="text-center text-slate-700 pt-10 pb-20">
          <p className="text-sm ">24 July 2023</p>
          <p>Gorontalo, Indoneisa</p>
          <p className="text-sm">Friday, 12:44 PM</p>
        </div>
      </div>
      <div className="lg:flex-[2] lg:px-18 md:px-14 px-6 py-10">
        <p className="text-3xl mb-8 text-slate-700">Today</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          <div className="min-h-40 bg-gradient-to-br from-slate-300 to-slate-100  hover:shadow-xl transition-shadow duration-500 border-slate-100 flex flex-col p-6 text-slate-600 rounded-lg gap-3">
            <p className="text-md">Wind</p>
            <span className="text-4xl">6 Km/h</span>
            <p className="text-xs">east</p>
          </div>
          <div className="min-h-40 bg-gradient-to-br from-slate-300 to-slate-100  hover:shadow-xl transition-shadow duration-500 border-slate-100 flex flex-col p-6 text-slate-600 rounded-lg gap-3">
            <p className="text-md">Humadity</p>
            <span className="text-4xl">69%</span>
          </div>
          <div className="min-h-40 bg-gradient-to-br from-slate-300 to-slate-100  hover:shadow-xl transition-shadow duration-500 border-slate-100 flex flex-col p-6 text-slate-600 rounded-lg gap-3">
            <p className="text-md">Real Feel</p>
            <span className="text-4xl">60</span>
          </div>
          <div className="min-h-40 bg-gradient-to-br from-slate-300 to-slate-100  hover:shadow-xl transition-shadow duration-500 border-slate-100 flex flex-col p-6 text-slate-600 rounded-lg gap-3">
            <p className="text-md">Pressure</p>
            <span className="text-4xl">1000 mb</span>
          </div>
          <div className="min-h-40 bg-gradient-to-br from-slate-300 to-slate-100  hover:shadow-xl transition-shadow duration-500 border-slate-100 flex flex-col p-6 text-slate-600 rounded-lg gap-3">
            <p className="text-md">UV Index</p>
            <span className="text-4xl">3</span>
            <p>Moderrate</p>
          </div>
          <div className="min-h-40 bg-gradient-to-br from-slate-300 to-slate-100  hover:shadow-xl transition-shadow duration-500 border-slate-100 flex flex-col p-6 text-slate-600 rounded-lg gap-3">
            <p className="text-md">Change of rain</p>
            <span className="text-4xl">70%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
