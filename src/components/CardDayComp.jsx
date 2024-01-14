import React from 'react';
import PropTypes from 'prop-types';

function CardDayComp({ day, image, degree }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gradient-to-br from-slate-300 to-slate-100  hover:shadow-xl transition-shadow duration-500 border-slate-100">
      <p className="text-sm text-slate-600">{day}</p>
      <img src={image} alt="" className="w-16" />
      <span>{degree}</span>
    </div>
  );
}

CardDayComp.propTypes = {
  day: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
};

export default CardDayComp;
