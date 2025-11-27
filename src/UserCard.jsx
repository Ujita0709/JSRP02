//CSS module:問題6
import styles from "./UserCard.module.css";

function UserCard({ name, age, hobby, introduce, bgColor }) {
  const classes = [
    styles.card,
    age >= 30 ? styles.cardOld : "",
    bgColor ? styles.cardCustomBg : "",
  ]
    .filter(Boolean)
    .join(" ");

  const style = bgColor ? { backgroundColor: bgColor } : undefined;

  const handleClick = () => {
    alert(`こんにちは、${name}です！`);
  };

  return (
    <div className={classes} style={style} onClick={handleClick}>
      <h2>{name}</h2>
      <p>年齢：{age} 歳</p>
      <p>趣味：{hobby}</p>
      {introduce && <p>自己紹介：{introduce}</p>}
    </div>
  );
}

export default UserCard;