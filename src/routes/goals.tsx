import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/goals')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>Cele</h1>;
}
