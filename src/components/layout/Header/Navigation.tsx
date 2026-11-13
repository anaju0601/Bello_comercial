import { navigation } from "../../../data/site";
import NavItem from "./NavItem";

interface NavigationProps {
  id?: string;
  className: string;
  hidden?: boolean;
  onNavigate?: () => void;
}

const availableNavigation = navigation.filter((item) => item.available !== false);

export default function Navigation({ id, className, hidden, onNavigate }: NavigationProps) {
  return (
    <nav id={id} aria-label="Navegação principal" className={className} hidden={hidden}>
      {availableNavigation.map((item) => (
        <NavItem key={item.href} href={item.href} onClick={onNavigate}>
          {item.label}
        </NavItem>
      ))}
    </nav>
  );
}
