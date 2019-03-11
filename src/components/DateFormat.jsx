import React from 'react';
import PropTypes from 'prop-types';

function formatDate(date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day} ${year}`;
}

const DateFormat = ({ date }) => <span>{formatDate(new Date(date))}</span>;

DateFormat.propTypes = {
  date: PropTypes.string,
};

DateFormat.defaultProps = {
  date: toString(new Date()),
};

export default DateFormat;
