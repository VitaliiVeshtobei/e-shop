import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineHighQuality, MdStorage } from 'react-icons/md';
import { Container, SvgContainer, List } from './BenefitsStyled';

const Benefits = () => {
  return (
    <Container>
      <List>
        <li>
          <SvgContainer>
            <TbTruckDelivery
              style={{ width: 67, height: 67 }}
              stroke="#EDA415"
            />
          </SvgContainer>
          <div>
            <h3>Доставка</h3>
            <p>Без передплати</p>
            <p>Доставка по Україні 1-2 дні</p>
          </div>
        </li>
        <li>
          <SvgContainer>
            <MdOutlineHighQuality
              style={{ width: 67, height: 67 }}
              fill="#EDA415"
            />
          </SvgContainer>
          <div>
            <h3>Якість</h3>
            <p>Найкраща якість</p>
            <p>За приємною ціною</p>
          </div>
        </li>
        <li>
          <SvgContainer>
            <MdStorage
              style={{ width: 67, height: 67 }}
              fill="#EDA415"
            />
          </SvgContainer>
          <div>
            <h3>Склад</h3>
            <p>Склад в Києві</p>
            <p>Можливий самовивіз</p>
          </div>
        </li>
      </List>
    </Container>
  );
};

export default Benefits;
