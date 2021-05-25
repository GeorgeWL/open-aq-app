import PropTypes from "prop-types";
import Input from "./input";
export function DateInput({ name, placeholder = "dd/mm/yyyy", onChange }) {
  return (
    <Input
      type="date"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
DateInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};
export default DateInput;
