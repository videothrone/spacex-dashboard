import './error.scss';

const Error = ({ message }) => {
  return (
    <div className="error">
      <p className="error__message box-shadow">{message}</p>
    </div>
  );
};

export default Error;
