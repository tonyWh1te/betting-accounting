import loader from '../../assets/loader-big.svg';

const LoaderBig = ({ classes = '' }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        style={{ animation: 'spin 1s infinite linear' }}
        className={classes}
        src={loader}
        alt="loader"
      />
    </div>
  );
};

export default LoaderBig;
