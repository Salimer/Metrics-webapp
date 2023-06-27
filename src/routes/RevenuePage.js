import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchIS from '../redux/thunk';
import { selectApple } from '../redux/store';
import RevenueGraph from '../components/revenueGraph';
import GET_APPLE from '../redux/api';

const Home = () => {
  const {
    appleIS, isLoading, error, errMsg,
  } = useSelector(selectApple);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIS({ url: GET_APPLE }));
  }, [dispatch, appleIS.length]);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>
          Oops! an error occurred. Please try again.
          {errMsg}
        </p>
      </div>
    );
  }

  return (
    <RevenueGraph company={appleIS} />
  );
};

export default Home;