import React, { createContext, useState } from "react";

export const PodcastContext = createContext();

export const PodcastContextProvider = (props) => {
  const { children } = props;


  return (
    <PodcastContext.Provider value={{ }}>
      {children}
    </PodcastContext.Provider>
  );
};

export default PodcastContext;
