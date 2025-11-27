import UserCard from "./UserCard";

function App() {
  const users = [
    { id: 1, name: "山田太郎", age: 28, hobby: "読書" },
    { id: 2, name: "鈴木花子", age: 22, hobby: "映画鑑賞" },
    { id: 3, name: "佐藤健", age: 31, hobby: "ジョギング" },
  ];

  return (
    <div className="container">
      <h1>ユーザーカード一覧</h1>

      {users.map(u => (
        <UserCard
          key={u.id}
          name={u.name}
          age={u.age}
          hobby={u.hobby}
        />
      ))}
    </div>
  );
}

export default App;
