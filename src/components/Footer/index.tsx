import Link from 'next/link';
import { Container } from './styled';

export default function Footer() {
  return (
    <Container>
      <Link href="https://github.com/brunosmaciel">
        <a target="_blank">Feito por Bruno Maciel ♥</a>
      </Link>
    </Container>
  );
}
