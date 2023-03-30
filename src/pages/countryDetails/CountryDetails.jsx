import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGeocode } from '../../redux/features/detailsSlice';

const CountryDetails = () => {
  const { cities, country, cityCode } = useSelector((store) => store.details);
  const dispatch = useDispatch();

  const showCode = (name) => {
    dispatch(fetchGeocode((name)));
  }

  return (
    <div>
      <div>
        <h2>{country}</h2>
      </div>
      <div>
        {cities.map((city, index) => (
          <p key={city} onClick={() => {
            showCode(city)
          }}>
            {city}
            code
            {cityCode[index]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
