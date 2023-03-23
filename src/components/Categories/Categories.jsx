import { List, Text, Wrapper } from './Categories.styled';
import image1 from '../../assets/images/Frame 29.png';
import image2 from '../../assets/images/Frame.png';
import { CategoriesCard } from './CategoriesCard/CategoriesCard';

const list = [
  {
    id: 1,
    img: image1,
    category: 'Tablet as a laptop',
  },
  {
    id: 2,
    img: image2,
    category: 'Wireless headphones',
  },
  {
    id: 3,
    img: image1,
    category: 'Tablet as a laptop',
  },
  {
    id: 4,
    img: image2,
    category: 'Wireless headphones',
  },
  {
    id: 5,
    img: image1,
    category: 'Tablet as a laptop',
  },
  {
    id: 6,
    img: image2,
    category: 'Wireless headphones',
  },
  {
    id: 7,
    img: image1,
    category: 'Tablet as a laptop',
  },
];

export const Categories = () => {
  return (
    <Wrapper>
      <Text>Categories</Text>
      <List>
        {list.map((item) => (
          <CategoriesCard
            key={item.id}
            id={item.id}
            img={item.img}
            category={item.category}
          />
        ))}
      </List>
    </Wrapper>
  );
};
