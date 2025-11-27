import { useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [keyword, setKeyword] = useState("");
  const users = [
    {
      id: 1,
      name: "山田太郎",
      age: 28,
      hobby: "読書",
      introduce: "最近はビジネス書を読むのにハマっています。",
      bgColor: "lightyellow", // 問題1: Propsで背景色を指定
    },
    {
      id: 2,
      name: "鈴木花子",
      age: 22,
      hobby: "映画鑑賞",
      introduce: "休日はよく映画館に行きます。",
      // bgColor は未指定 → 年齢によるデフォルト色
    },
    {
      id: 3,
      name: "佐藤健",
      age: 31,
      hobby: "ジョギング",
      introduce: "健康のために毎朝ランニングしています。",
      // 30歳以上なので薄赤背景（問題3）
    },
  ];

  // 問題5: 検索ボックスの内容で絞り込み
  const filteredUsers = users.filter((u) => {
    if (keyword === "") return true;
    return (
      u.name.includes(keyword) ||
      u.hobby.includes(keyword) ||
      (u.introduce && u.introduce.includes(keyword))//問題4
    );
  });

  return (
    <div className="container">
      <h1>ユーザーカード一覧</h1>

      {/* 検索ボックス:問題5 */}
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="search">キーワード検索：</label>
        <input
          id="search"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="名前・趣味・自己紹介で検索"
        />
    </div>
    {filteredUsers.map((u) => (
        <UserCard
          key={u.id}
          name={u.name}
          age={u.age}
          hobby={u.hobby}
          introduce={u.introduce}
          bgColor={u.bgColor}
        />
      ))}

      {filteredUsers.length === 0 && (
        <p>該当するユーザーがいません。</p>
      )}
    </div>
  );
}

export default App;
