import Sidebar from '@/components/layout/Sidebar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <div className="grid min-h-dvh grid-cols-[auto_1fr]">
      <Sidebar />
      <main className="p-8 pl-0">
        <Outlet />
      </main>
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
