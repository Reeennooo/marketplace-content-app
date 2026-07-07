import { Outlet } from "react-router-dom";

import {
  SidebarInset,
  SidebarProvider,
} from "@/shared/ui-kit/sidebar";
import {AppSidebar} from 'shared/ui/AppSidebar/AppSidebar.tsx';
import {DashboardHeader} from 'shared/ui/DashboardHeader/DashboardHeader.tsx';

export function DashboardLayout() {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main area */}
      <SidebarInset>
        <div className="flex h-screen flex-col min-w-0">
          {/* Header */}
          <DashboardHeader />

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}