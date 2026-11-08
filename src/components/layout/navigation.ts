import { CalendarIcon, TargetIcon, WalletIcon, CalendarCheck, SettingsIcon } from 'lucide-react';
import type { ComponentType } from 'react';

type NavItem = {
  to: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
};

export const items: NavItem[] = [
  { to: '/', label: 'Kalendarz', icon: CalendarIcon },
  { to: '/expanses', label: 'Wydatki', icon: WalletIcon },
  { to: '/goals', label: 'Cele', icon: TargetIcon },
  { to: '/habits', label: 'Nawyki', icon: CalendarCheck },
  { to: '/settings', label: 'Ustawienia', icon: SettingsIcon },
];
