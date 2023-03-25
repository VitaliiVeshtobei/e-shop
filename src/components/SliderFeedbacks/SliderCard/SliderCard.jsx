import { LinkItem, Item, Div, AvatarContainer, Box } from './SliderCard.styled';
import image from '../../../assets/images/feedback/border.svg';

export const SliderCard = ({ name, feedback, avatar }) => {
  return (
    <Item>
      <LinkItem>
        <Div>
          <AvatarContainer image={image}>
            <img
              src={avatar}
              alt={name}
            />
          </AvatarContainer>
          <h3>{name}</h3>
        </Div>
        <Box>
          <p>{feedback}</p>
        </Box>
      </LinkItem>
    </Item>
  );
};
