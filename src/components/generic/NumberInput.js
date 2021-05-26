import PropTypes from "prop-types";
import Input from "./Input";
function NumberInput({ min = 1, max = 100, step = 1, onChange, value, name }) {
  return (
    <Input
      type="number"
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
      name={name}
      id={name}
    />
  );
}
NumberInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
export default NumberInput;
