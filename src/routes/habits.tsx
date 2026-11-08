import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/habits')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>Nawyki</h1>;
}
