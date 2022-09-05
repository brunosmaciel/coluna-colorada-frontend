import Link from 'next/link';
import { Container } from './styled';

export default function Header() {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>Coluna Colorada</a>
        </Link>
      </div>
    </Container>
  );
}
