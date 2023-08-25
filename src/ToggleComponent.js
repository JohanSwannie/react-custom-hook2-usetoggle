import useToggle from "./useToggle";

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div className="toggle-container">
      <h3>Current Boolean Value : {value.toString()}</h3>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
      {value ? (
        <div className="definition">
          <h4>Definition of TRUE</h4>
          <br />
          <h5>In accordance with fact or reality</h5>
        </div>
      ) : (
        <div className="definition">
          <h4>Definition of FALSE</h4>
          <br />
          <h5>Not according with truth or fact - Incorrect</h5>
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
