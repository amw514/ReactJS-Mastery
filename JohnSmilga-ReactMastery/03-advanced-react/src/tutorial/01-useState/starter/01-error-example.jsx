const ErrorExample = () => {
  let count = 0;

  function handleClick() {
    count += 1;
  }

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn">
        Increase
      </button>
    </>
  );
};

export default ErrorExample;
