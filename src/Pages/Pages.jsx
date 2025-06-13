// Pages.jsx
import {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./Landing";
import About from "./About";
import Careers from "./Careers";
import Stories from "./Stories";
import ArticleDetail from "./ArticleDetail";
import Products from "./Products";
import CareerDetials from "./CareerDetails";
import AboutDetails from "./AboutDetails";
import Awards from '../components/About/Awards';
import Locator from "./Locator";
import Privacy from "./Privacy";
import Notices from "./Notices";
import NoticeDetails from "./NoticeDetails";
import Report from "./Reports";
import ReportDetails from "./ReportDetails";
import PageWrapper from "../components/PageWrapper"; 
import ProductsMain from "./ProductsMain";
import ContactPage from "./ContactPage";
const Pages = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/about/:id" element={<PageWrapper><AboutDetails /></PageWrapper>} />
        <Route path="/award/:id" element={<PageWrapper><Awards /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/careers/:id" element={<PageWrapper><CareerDetials /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><ProductsMain /></PageWrapper>} />
        <Route path="/products/:category/:title" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/stories" element={<PageWrapper><Stories /></PageWrapper>} />
        <Route path="/stories/:id" element={<PageWrapper><ArticleDetail /></PageWrapper>} />
        <Route path="/locator/" element={<PageWrapper><Locator /></PageWrapper>} />
        <Route path="/contact-us/" element={<PageWrapper><Locator /></PageWrapper>} />
        <Route path="/privacy/" element={<PageWrapper><Privacy /></PageWrapper>} />
        <Route path="/notices/" element={<PageWrapper><Notices /></PageWrapper>} />
        <Route path="/notices/:id" element={<PageWrapper><NoticeDetails /></PageWrapper>} />
        <Route path="/reports/" element={<PageWrapper><Report /></PageWrapper>} />
        <Route path="/contact/" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/reports/:id" element={<PageWrapper><ReportDetails /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
