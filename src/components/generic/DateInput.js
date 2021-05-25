import PropTypes from "prop-types";
import Input from "./Input";
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
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};
export default DateInput;
