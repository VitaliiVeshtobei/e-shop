import { List, Text, Wrapper } from './Categories.styled';
import image1 from '../../assets/images/Frame 29.png';
import image2 from '../../assets/images/Frame.png';
import { CategoriesCard } from './CategoriesCard/CategoriesCard';

const list = [
  {
    id: 1,
    img: image1,
    category: 'Підрульові шлейфи',
  },
  {
    id: 2,
    img: image2,
    category: 'Бризговики автомобільні',
  },
  {
    id: 3,
    img: image1,
    category: 'Круїз контроль комплект Toyota',
  },
  {
    id: 4,
    img: image2,
    category: 'Проблискові маячки',
  },
  {
    id: 5,
    img: image1,
    category: 'Ручки перемикання передач',
  },
  {
    id: 6,
    img: image2,
    category: 'Накладки на педалі',
  },
  {
    id: 7,
    img: image1,
    category: 'Кнопки руля',
  },
  {
    id: 8,
    img: image2,
    category: 'Модуль складання дзеркала',
  },
];

export const Categories = () => {
  return (
    <Wrapper>
      <Text>Категорії</Text>
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
