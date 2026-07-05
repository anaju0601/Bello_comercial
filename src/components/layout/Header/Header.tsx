import Button from "../../ui/Button";
import Container from "../../ui/Container";

import { company } from "../../../data/site";

import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <Navigation />

        <Button>{company.cta}</Button>
      </Container>
    </header>
  );
}