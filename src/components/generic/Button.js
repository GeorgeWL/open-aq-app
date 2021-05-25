import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "../../styles/button.module.scss";
function Button({
  onClick,
  disabled,
  type = "primary",
  children,
  value,
  name
}) {
  return (
    <button
      onClick={onClick}
      value={value}
      name={name}
      disabled={disabled}
      className={classNames(styles.button, styles[`button--${type}`])}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  children: PropTypes.node,
  value: PropTypes.any,
  name: PropTypes.string
};
export default Button;
