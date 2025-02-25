import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Navbar here */}
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
