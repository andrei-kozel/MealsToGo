import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const SearchBar = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <Searchbar
      icon={isFavouritesToggled ? "heart" : "heart-outline"}
      onIconPress={onFavouritesToggle}
      placeholder="Search for a location"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={() => {
        search(searchQuery);
      }}
    />
  );
};
