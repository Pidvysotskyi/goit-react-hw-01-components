import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List, FriendItem } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}
            />
          </FriendItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
