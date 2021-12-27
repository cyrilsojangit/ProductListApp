import styles from "./save.module.css";
import { useRef } from "react";
import useHttp from "../hooks/use-http";

const SaveItem = (props) => {
  const enteredname = useRef();
  const categoryname = useRef();
  const { isLoading, error, sendRequest: fetchItems } = useHttp();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = enteredname.current.value;
    const enteredCategoryname = categoryname.current.value;
    fetchItems({
      url: `http://localhost:8080/api/product/35`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: 35,
        name: `${enteredName}`,
        description: "heheh",
        category: {
          name: `${enteredCategoryname}`,
        },
        creation_Date: "2020-09-20T00:01",
        updated_Date: "2020-09-20T00:01",
        last_purchased_Date: "2020-10-24T00:01",
      },
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input ref={enteredname} label="name" />
      <input ref={categoryname} label="name" />
      <button>+ADD</button>
    </form>
  );
};
export default SaveItem;
