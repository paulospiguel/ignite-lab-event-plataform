import { Logo } from "./Logo";

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <header className="flex items-center justify-center py-5 bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}

export default Header;
