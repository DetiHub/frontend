import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="h-full">
      {/* Navbar here */}
      <Outlet />
    </div>
  ),
});
