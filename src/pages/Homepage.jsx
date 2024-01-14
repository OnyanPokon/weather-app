import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import CardDayComp from '../components/CardDayComp';
import { weatherDay } from '../data';
import TopNavComp from '../components/TopNavComp';

function Homepage() {
  const [active, setActive] = React.useState('today');
  const handleNavClick = (tab) => {
    setActive(tab);
  };
  return (
    <section className=" bg-white flex md:flex-row flex-col ">
      <div className="md:flex-[1] bg-slate-200 flex flex-col items-center">
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
        <div className="flex mt-8 justify-start">
          <p className="lg:text-[6rem] md:text-[3rem] text-[5rem] font-extralight leading-none">
            31

          </p>
          <span className="font-sans text-4xl">℃</span>
        </div>
        <p className="mt-6">Mostly Cloudly</p>
        <hr className="w-full bg-slate-700 border-[1px] border-slate-300 max-w-xs mt-6" />
        <div className="text-center text-slate-700 pt-10 pb-20">
          <p className="text-xs">24 July 2023</p>
          <p className="mt-2 text-sm">Gorontalo, Indoneisa</p>
          <p className="text-xs mt-2">Friday, 12:44 PM</p>
        </div>
      </div>
      <div className="md:flex-[2] lg:px-18 md:px-14 px-6 py-10">
        <div className="mb-8 flex justify-between items-center">
          <TopNavComp active={active} onTabClick={handleNavClick} />
        </div>

        {active === 'today' && (
          <>
            <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-3 mb-10">
              {weatherDay.map((day) => (
                <CardDayComp
                  key={day.id}
                  day={day.day}
                  image={day.imageurl}
                  degree={day.degree}
                />
              ))}
            </div>
            <p className="mb-4 text-lg">
              Today
              {'\''}
              s Highlights
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 md:gap-6 gap-4">
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
            </div>
          </>
        )}
        {active === 'week' && (
          <h1>week</h1>
        )}

      </div>
    </section>
  );
}

export default Homepage;
