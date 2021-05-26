import styles from "../../styles/label.module.scss";
import PropTypes from "prop-types";
function Label({ id, children }) {
  return (
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  );
}
Label.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};
export default Label;
