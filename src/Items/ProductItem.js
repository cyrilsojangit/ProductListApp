import { Fragment } from "react/cjs/react.production.min";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <Fragment>
      <ul>
        <li>{`Category : ${props.category}`}</li>
        <li className={classes.item}>{props.name}</li>
      </ul>
    </Fragment>
  );
};

export default ProductItem;
