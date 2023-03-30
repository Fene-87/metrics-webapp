import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../../redux/features/continentsSlice';
import Countries from '../../components/countries/Countries';
import './Home.css';

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
      <div className="countries-container">
        {continents.map((continent) => (
          <Countries key={continent.country} {...continent} />
        ))}
      </div>
    </div>
  );
};

export default Home;
