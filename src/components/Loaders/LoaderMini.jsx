import loader from '../../assets/loader-mini.svg';

const LoaderMini = ({ classes = '' }) => {
  return (
    <img
      style={{ animation: 'spin 1s infinite linear' }}
      className={classes}
      src={loader}
      alt="loader"
    />
  );
};

export default LoaderMini;
