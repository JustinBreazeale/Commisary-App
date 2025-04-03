
import LineItem from "./LineItem";

const ItemList = ({ items, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem 
          key={item._id}
          item={item}
          handleDelete={handleDelete}
          
        />
      ))}
    </ul>
  );
};

export default ItemList;
