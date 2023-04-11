import style from '../Friend-list-item/Friend-list-item.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={isOnline ? style['status-online'] : style['status-offline']}
      ></span>
      <img
        className={style.avatar}
        src={avatar}
        alt="{name} avatar"
        width="48"
      />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
