import Link from 'next/link';
import MainContainer from '../components/MainContainer'; // Если используете

export default function NotFound() {
  return (
    <MainContainer keywords="  --  ii">
      <h1>404 - Страница не найдена!</h1>
      <p>Такого адреса не существует.</p>
      <Link href="/">Вернуться на главную</Link>
    </MainContainer>
  );
}