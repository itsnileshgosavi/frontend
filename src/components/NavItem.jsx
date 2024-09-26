
  const NavItem = ({ Icon, label, isExpanded, isOpen, onClose }) => (
    <li className={`flex items-center p-3 ml-2 hover:bg-hover rounded-lg cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'}`}>
      <Icon size={24} />
      {isExpanded && <span className="ml-5">{label}</span>}
    </li>
  );

  export default NavItem;
