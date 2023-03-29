import React, { useEffect } from 'react';
import { Backdrop, ItemCategories, ListCategories, ListCategoriesContainer } from './MenuCategoriesStyled';

const list = [
  {
    id: 1,
    category: 'Tablet as a laptop',
  },
  {
    id: 2,
    category: 'Wireless headphones',
  },
  {
    id: 3,
    category: 'Tablet as a laptop',
  },
  {
    id: 4,
    category: 'Wireless headphones',
  },
  {
    id: 5,
    category: 'Tablet as a laptop',
  },
  {
    id: 6,
    category: 'Wireless headphones',
  },
  {
    id: 7,
    category: 'Tablet as a laptop',
  },
  {
    id: 8,
    category: 'Tablet as a laptop',
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
              <p>{item.category}</p>
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
