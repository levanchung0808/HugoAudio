import React, { createContext, useState } from "react";
import { onGetProducts } from "./PodcastService";

export const PodcastContext = createContext();

export const PodcastContextProvider = (props) => {
  const { children } = props;

  const [products, setProducts] = useState([]);

  const getProducts = async (req, res, next) => {
    try {
      const result = await onGetProducts();
      if (result.error == false) {
        setProducts(result.data);
      }else{
        setProducts([]);
      }
    } catch (e) {
      console.log("getProducts error: " + e);
    }
  };

  return (
    <PodcastContext.Provider value={{ getProducts, products }}>
      {children}
    </PodcastContext.Provider>
  );
};

export default PodcastContext;
