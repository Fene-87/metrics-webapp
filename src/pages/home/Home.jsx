import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/features/continentsSlice';

const Home = () => {
  const { continents, status } = useSelector((store) => store.continents);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  return (
    <div>
      <div>
        {continents.map((continent) => (
          <div key={continent.iso3}>{continent.country}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
