import { Fragment } from "react/cjs/react.production.min";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { name, category, id } = props;

  const clickHandler = () => {
    props.updateHandler(name, category, id);
  };
  return (
    <Fragment>
      <ul onClick={clickHandler}>
        <li>{`Category : ${props.category}`}</li>
        <li className={classes.item}>{props.name}</li>
      </ul>
    </Fragment>
  );
};

export default ProductItem;
