function UserCard({ name, age, hobby, introduce, bgcolor}) {
//introduce:問題2、bgcolor:問題1
  // 年齢によるデフォルト背景色（30歳以上なら薄い赤）：問題3
  const defaultBgColor = age >= 30 ? "#ffe5e5" : "#f9f9f9";  
  // インラインスタイル
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    marginBottom: "12px",
    borderRadius: "8px",
    backgroundColor: bgColor || defaultBgColor,//問題1
    cursor: "pointer",
  };

  //クリックしたら名前を表示：問題4
  const handleClick = () =>{
    alert(`こんにちは、S{name}です！`)
  }

  return (
    <div style={cardStyle} onClick={handleClick}>{/*問題4*/}
      <h2>{name}</h2>
      <p>年齢：{age} 歳</p>
      <p>趣味：{hobby}</p>
      {/* introduce が渡されていれば表示:問題2 */}
      {introduce && <p>自己紹介：{introduce}</p>}
    </div>
  );
}
export default UserCard;