import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Footer from "../components/Footer/Footer";
import Spinner from "../components/ui/Spinner/Spinner";
import Weather from "../components/Weather/Weather";
import { AppStore } from "../store/store";
import { fetchWeather } from "../store/fetchWeather";

const Home = () => {
  const { isInitial, loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
    isInitial: state.app.isInitial
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      // dispatch(fetchWeather());
    }
  }, []);
  return loading ? <Spinner /> : <Weather />;
};

export default Home;
