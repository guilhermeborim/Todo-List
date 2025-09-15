import Logo from "../assets/images/logo.svg?react";
import Container from "../components/container";

export default function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <Logo className="md:h-12 h-9" />
    </Container>
  );
}
