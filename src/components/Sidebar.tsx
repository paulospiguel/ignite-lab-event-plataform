interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="block pb-6 mb-6 text-2xl font-bold border-b border-gray-500">
        Cronograma de aula
      </span>
    </aside>
  );
}

export default Sidebar;
