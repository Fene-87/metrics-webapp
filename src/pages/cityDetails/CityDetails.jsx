import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CityDetails = () => {
  const { lat, lon } = useSelector((store) => store.details);

  return (
    <div>
      <div>Country Name</div>
      <h3>Cities</h3>
      <div>List of Cities</div>
    </div>
  );
};

export default CityDetails;
