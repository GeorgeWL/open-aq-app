import Button from "../generic/Button";
import styles from "../../styles/citiesListItem.module.scss";

export default function CitiesListItem({ city: { name }, onClickItem }) {
  return (
    <li className={styles.item}>
      <p>{name}</p>
      <Button>View Measurements</Button>
    </li>
  );
}
