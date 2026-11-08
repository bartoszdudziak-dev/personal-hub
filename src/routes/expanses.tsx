import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/expanses')({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1>Wydatki</h1>;
}
