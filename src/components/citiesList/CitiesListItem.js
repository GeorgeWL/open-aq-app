import Button from "../generic/Button";
import styles from "../../styles/citiesListItem.module.scss";
export default function CitiesListItem({ city: { name }, onClick }) {
  const urlSafeName = encodeURIComponent(
    name.trim().split(/ /g).join("_").toLowerCase()
  );
  return (
    <li className={styles.item}>
      <p>{name}</p>
      <Button value={urlSafeName} onClick={(evt) => onClick(evt.target.value)}>
        View Measurements
      </Button>
    </li>
  );
}
