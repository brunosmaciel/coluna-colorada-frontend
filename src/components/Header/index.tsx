import Link from 'next/link';
import { Container } from './styled';

export default function Header() {
  return (
    <Container>
      <Link href="/">
        <a>Coluna Colorada</a>
      </Link>
    </Container>
  );
}
