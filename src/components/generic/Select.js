import PropTypes from "prop-types";
function Select({ options, selected = "", onChange, emptyValue, placeholder }) {
  return (
    <select onChange={onChange} value={selected}>
      {emptyValue && <option value="">{placeholder}</option>}
      {options?.map((opt) => (
        <option value={opt.value || opt.id} key={opt.id}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.any
    })
  ),
  placeholder: PropTypes.string,
  emptyValue: PropTypes.bool,
  selected: PropTypes.any,
  onChange: PropTypes.func.isRequired
};
export default Select;
