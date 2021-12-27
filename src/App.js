import useHttp from "./hooks/use-http";
import React, { useEffect, useState } from "react";
import Items from "./Items/Items";
import { SearchBox } from "./SearchBox/SearchBox";
import "./App.css";
import { Fragment } from "react/cjs/react.production.min";
import SaveItem from "./save/saveItem";

function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const { isLoading, error, sendRequest: fetchItems } = useHttp();
  useEffect(() => {
    const processItems = (data) => {
      const datalist = [];
      for (const k of data)
        datalist.push({
          id: k.id,
          name: k.name,
          description: k.description,
          category: k.category.name,
        });
      console.log(datalist);
      const filteredDataList = datalist.filter((data) =>
        data.category.toLowerCase().includes(searchValue?.toLowerCase())
      );
      console.log("filteredDataList");
      filteredDataList.length > 0
        ? setItems(filteredDataList)
        : setItems(datalist);
    };

    fetchItems(
      {
        url: `http://localhost:8080/api/product/`,
      },
      processItems
    );
  }, [fetchItems, searchValue]);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const updateHandler = (name, category,id) => {
    console.log("value", category, name, id);
  };
  return (
    <Fragment>
      <h1>Product Items</h1>
      <SaveItem />
      <SearchBox onSearchChange={onSearchChange} />
      <Items
        productItems={items}
        loading={isLoading}
        error={error}
        updateHandler={updateHandler}
      ></Items>
    </Fragment>
  );
}

export default App;
