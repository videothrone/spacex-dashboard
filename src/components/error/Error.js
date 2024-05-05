import './error.scss';

const Error = ({ message }) => {
  return (
    <div className='error animate' role='alert'>
      <p className="error__message box-shadow">{message}</p>
    </div>
  );
};

export default Error;
