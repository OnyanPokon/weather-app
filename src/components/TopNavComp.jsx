import React from 'react';
import { HiOutlineShare } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io';
import PropTypes from 'prop-types';

function TopNavComp({ active, onTabClick }) {
  const activeClass = 'text-2xl border-b-2 border-slate-500 text-slate-600 transition transition-all duration-500';
  const inActiveClass = 'text-2xl text-slate-400 transition transition-all duration-500';

  const handleClick = (tab) => {
    onTabClick(tab);
  };
  return (
    <>
      <li className="flex  gap-6">
        <ul>
          <button type="button" aria-label="asdas" className={active === 'today' ? activeClass : inActiveClass} onClick={() => handleClick('today')}>Today</button>
        </ul>
        <ul>
          <button type="button" aria-label="asdas" className={active === 'week' ? activeClass : inActiveClass} onClick={() => handleClick('week')}>Week</button>
        </ul>
      </li>
      <li className="list-none flex">
        <ul>
          <button
            type="submit"
            className="p-2.5  text-lg font-medium text-slate-400  rounded-full hover:bg-slate-100 transition-colors duration-500 focus:outline-none focus:bg-slate-100"
          >
            <HiOutlineShare />
            <span className="sr-only">Search</span>
          </button>
        </ul>
        <a href="https://github.com/OnyanPokon" rel="noopener noreferrer" target="_blank">
          <button
            type="submit"
            className="p-2.5  text-lg font-medium text-slate-400  rounded-full hover:bg-slate-100 transition-colors duration-500 focus:outline-none focus:bg-slate-100"
          >
            <IoLogoGithub />
            <span className="sr-only">Search</span>
          </button>
        </a>
      </li>

    </>
  );
}

TopNavComp.propTypes = {
  active: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TopNavComp;
