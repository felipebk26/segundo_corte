import PropTypes from "prop-types";
export const Form = ({ onCreateUser }) => {
  return (
    <>
      <div className="form-container">
        <h2>Crear Nuevo Usuario</h2>
        <form onSubmit={onCreateUser} className="product-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="age"
              placeholder="Edad"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              name="photoUrl"
              placeholder="URL de la foto"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Crear Usuario
          </button>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
};

Form.defaultProps = {
  onCreateUser: () => {},
};