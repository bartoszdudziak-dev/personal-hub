import { Link } from '@tanstack/react-router';
import { items } from './navigation';

function Sidebar() {
  return (
    <aside className="w-64 p-6">
      <nav className="h-full">
        <ul className="flex h-full flex-col">
          {items.map(({ to, label, icon }) => {
            const Icon = icon;

            return (
              <li key={label} className="last-of-type:mt-auto">
                <Link to={to} className="flex items-center gap-2 py-4">
                  {Icon && <Icon />}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
