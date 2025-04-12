import { useRouter } from "next/router" 
import styles from "../../styles/user.module.sass";
import MainContainer from "../../components/MainContainer";
import { fetchUser } from "../../api/users";

export default function User({ user }) {
    const {query} = useRouter()
    console.log(query)
    return (
        <MainContainer className={styles.user}>
           <h1>пользователь id: {query.id}</h1>
           <div>имя пользователя {user.name}</div>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    
    if (!res.ok) {
      return { notFound: true };
    }

    const user = await res.json();
    return { props: { user } };
}

// export async function getServerSideProps({ params }) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
//   const user = await res.json();
  
//   if (!user.id) {
//     return {
//       redirect: {
//         destination: '/error', // Ваша кастомная страница ошибки
//         permanent: false,
//       },
//     }
//   }
  
//   return { props: { user } };
// }
