import { Outlet } from "react-router-dom"
import {useDispatch} from "react-redux"
import { useEffect } from "react";
import { getAllHomeData } from "../features/reducer/homeSlice";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHomeData());
  }, [dispatch]);
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
