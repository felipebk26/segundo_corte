import PropTypes from 'prop-types';
export const User = ({ user = {} }) => {
  return (
    <>
      <div key={user.id} className="product-card">
        <img src={user.photoUrl} alt={user.name} className="product-image" />
        <h3 className="product-name">{user.name}</h3>
        <p className="user-info">📧 {user.email}</p>
        <p className="user-info">📱 {user.phone}</p>
        <p className="user-info">📍 {user.address}</p>
        <p className="user-info">🎂 {user.age} años</p>
        <span className="product-id">ID: {user.id}</span>
      </div>
    </>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

User.defaultProps = {
  user: {},
};