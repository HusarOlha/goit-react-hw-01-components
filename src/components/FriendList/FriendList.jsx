import FriendListItem from 'components/Friend-list-item/Friend-list-item';
import PropTypes from 'prop-types';

import css from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={css['friend-list']}>
        {friends.map(friend => {
          return <FriendListItem key={friend.id} {...friend}></FriendListItem>;
        })}
      </ul>
    </div>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
