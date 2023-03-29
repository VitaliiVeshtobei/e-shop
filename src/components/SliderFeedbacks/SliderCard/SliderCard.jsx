import { LinkItem, Item, Div, AvatarContainer, Box } from './SliderCard.styled';

export const SliderCard = ({ name, feedback, avatar }) => {
  return (
    <Item>
      <LinkItem>
        <Div>
          <AvatarContainer>
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
