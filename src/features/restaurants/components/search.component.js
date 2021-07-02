import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const SearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Searchbar
      placeholder="Search for a location"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onSubmitEditing={() => {
        search(searchQuery);
      }}
    />
  );
};
