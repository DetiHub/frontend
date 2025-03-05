import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="h-full">
      {/* Navbar here */}
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
