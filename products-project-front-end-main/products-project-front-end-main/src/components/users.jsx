import PropTypes from "prop-types";
import { User } from "./User";
export const Users = ({ users = [] }) => {
  return (
    <>
      <div className="products-container">
        <h2>Lista de Usuarios</h2>
        {users.length === 0 ? (
          <p className="no-products">No hay usuarios disponibles</p>
        ) : (
          <div className="products-grid">
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

Users.defaultProps = {
  users: [],
};