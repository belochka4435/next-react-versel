import Link from "next/link";
import { useState } from "react";
import MainContainer from "../../components/MainContainer";
import { fetchUsers } from "../../api/users";

const Users = ({ users = [] }) => {
  const [newUser, setNewUser] = useState("");
  const [localUsers, setLocalUsers] = useState(users);

  return (
    <MainContainer keywords=" - 111">
      <h1>Страница пользователей</h1>
      <ul>
        {localUsers.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button
        onClick={() => {
          setLocalUsers([...localUsers, { 
            id: localUsers.length + 1, 
            name: newUser 
          }]);
          setNewUser("");
        }}
      >
        Добавить пользователя
      </button>
    </MainContainer>
  );
};

export async function getServerSideProps() {
  const users = await fetchUsers();
  return { props: { users }};
}

export default Users;