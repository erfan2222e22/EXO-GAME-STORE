import { useContext, useState, createContext } from "react";
const PageLimiter = createContext();

export const PaginationConterCatgory = ({ childern }) => {
  const [pageConter, setPageConter] = useState(1);
  const [allProductData, setAllProductData] = useState([]);
  return (
    <PageLimiter.Provider
      value={{ pageConter, setPageConter, allProductData, setAllProductData }}
    >
      {childern}
    </PageLimiter.Provider>
  );
};

export const usePaginationConterCatgory = () => {
  return useContext(PageLimiter);
};
