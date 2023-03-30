import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Backdrop, ItemCategories, ListCategories, ListCategoriesContainer } from './MenuCategoriesStyled';

const list = [
  {
    id: 1,
    category: 'Підрульові шлейфи',
  },
  {
    id: 2,
    category: 'Бризговики автомобільні',
  },
  {
    id: 3,
    category: 'Круїз контроль комплект Toyota',
  },
  {
    id: 4,
    category: 'Проблискові маячки',
  },
  {
    id: 5,
    category: 'Ручки перемикання передач',
  },
  {
    id: 6,

    category: 'Накладки на педалі',
  },
  {
    id: 7,
    category: 'Кнопки руля',
  },
  {
    id: 8,
    category: 'Модуль складання дзеркала',
  },
];

const MenuCategories = ({ handleClick, showCategories }) => {
  useEffect(() => {
    window.addEventListener('wheel', noScroll, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', noScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const noScroll = (e) => {
    e.preventDefault();
  };
  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      handleClick();
    }
  };
  return (
    <>
      <ListCategoriesContainer showCategories={showCategories}>
        <ListCategories>
          {list.map((item) => (
            <ItemCategories key={item.id}>
              <NavLink>
                <p>{item.category}</p>
              </NavLink>
            </ItemCategories>
          ))}
        </ListCategories>
      </ListCategoriesContainer>
      <Backdrop
        showCategories={showCategories}
        onClick={handleClick}
      ></Backdrop>
    </>
  );
};

export default MenuCategories;
