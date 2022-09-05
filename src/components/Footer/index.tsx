import Link from 'next/link';
import { Container } from './styled';

export default function Footer() {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>Feito por Bruno Maciel</a>
        </Link>
      </div>
    </Container>
  );
}
