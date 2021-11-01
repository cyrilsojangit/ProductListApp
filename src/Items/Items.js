import Section from '../UI/Section'
import ProductItem from './ProductItem';
import classes from './Items.module.css';

const Items = (props) => {
  let dataList = <h2>No Items found. Start adding some!</h2>;

  if (props.productItems.length > 0) {
    dataList = (
      <ul>
        {props.productItems.map((item) => (
          <ProductItem key={item.id} name={item.name} category = {item.category}></ProductItem>
        ))}
      </ul>
    );
  }

  let content = dataList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading Items...';
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Items;
