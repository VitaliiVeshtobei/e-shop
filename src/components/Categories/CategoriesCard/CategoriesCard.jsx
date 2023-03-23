import { Img, Item } from './CategoriesCard.styled';

export const CategoriesCard = ({ id, img, category }) => {
  return (
    <Item
      key={id}
      id={id}
    >
      <Img
        src={img}
        alt={category}
      />
      <p>{category}</p>
    </Item>
  );
};
