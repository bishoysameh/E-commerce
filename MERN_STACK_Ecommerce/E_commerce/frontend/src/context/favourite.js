import { useState, useContext, createContext, useEffect } from "react";

const FavouriteContext = createContext();

const FavouriteProvider = ({ children }) => {
  const [favouriteProduct, setFavouriteProduct] = useState([]);
  useEffect(() => {
    const storedFavourite = localStorage.getItem("favourite");
    if (storedFavourite) {
      setFavouriteProduct(JSON.parse(storedFavourite));
    }
  }, []);
  const updateFavourite = (newFavourite) => {
    setFavouriteProduct(newFavourite);
    localStorage.setItem("favourite", JSON.stringify(newFavourite));
  };
  return (
    <FavouriteContext.Provider value={[favouriteProduct, setFavouriteProduct]}>
      {children}
    </FavouriteContext.Provider>
  );
};

const useFavourite = () => useContext(FavouriteContext);
export { useFavourite, FavouriteProvider };
