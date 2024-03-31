import styles from './Card.module.css'

const Card = ({ nameList }) => {
  const cards = nameList.map(({ name, age, number }, idx) => (
    <div className={styles.card} key={idx}>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>phoneNumber: {number}</h2>
    </div>
  ));
  return (
    <>
      <div className={styles.container}>{cards}</div>
    </>
  );
};

export default Card;
