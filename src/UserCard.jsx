function UserCard({ name, age, hobby }) {
  // インラインスタイル
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    marginBottom: "12px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>年齢：{age} 歳</p>
      <p>趣味：{hobby}</p>
    </div>
  );
}