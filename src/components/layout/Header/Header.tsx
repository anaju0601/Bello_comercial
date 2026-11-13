import Button from "../../ui/Button";
import Container from "../../ui/Container";

import { company } from "../../../data/site";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-(--site-header-height) items-center justify-between max-sm:px-4">
        <Logo />

        <Navigation className="hidden items-center gap-8 lg:flex" />

        <div className="flex items-center gap-2">
          <Button className="max-sm:px-3">{company.cta}</Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
