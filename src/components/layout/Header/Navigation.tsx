import { navigation } from "../../../data/site";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <NavItem key={item.href} href={item.href}>
          {item.label}
        </NavItem>
      ))}
    </nav>
  );
}