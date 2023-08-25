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
          Definition of TRUE : in accordance with fact or reality
        </div>
      ) : (
        <div className="definition">
          Definition of FALSE : not according with truth or fact; incorrect
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
