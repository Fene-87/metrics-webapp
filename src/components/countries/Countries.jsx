import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchGeocode, updateCities, updateCountry } from '../../redux/features/detailsSlice';

const Countries = ({
  country,
  cities,
}) => {
  const { cityCode } = useSelector((store) => store.details);
  const dispatch = useDispatch();

  const handleGeocoding = () => {
    cities.forEach((city) => {
      dispatch(fetchGeocode(city));
    });
  };

  const handleUpdateCountry = () => {
    dispatch(updateCountry(country));
  };

  const handleUpdateCities = () => {
    dispatch(updateCities(cities));
  };

  return (
    <div>
      <NavLink to="/countrydetails">
        <p onClick={() => {
          handleUpdateCities();
          handleUpdateCountry();
        }}
        >
          {country}
        </p>
      </NavLink>
      <p>
        No of Cities:
        {cities.length}
      </p>
      <p>View Full Details</p>
    </div>
  );
};

export default Countries;
