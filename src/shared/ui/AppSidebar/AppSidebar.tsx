import {NavLink} from "react-router-dom";
import {GraduationCap, Home, LayoutDashboard, Package, Users} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui-kit/sidebar";

const menu = [
  {
    title: "Главная",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Карточки",
    url: "/dashboard/cards",
    icon: Package,
  }
];

const manageMenu = [
  {
    title: "Пользователи",
    url: "/dashboard",
    icon: Users,
  },
  {
    title: "Дети",
    url: "/dashboard/cards",
    icon: GraduationCap,
  }
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-secondary">
      <SidebarHeader className="border-b h-14">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="h-5 w-5" />
          </div>

          <div>
            <p className="font-semibold">Marketplace</p>
            <p className="text-xs text-muted-foreground">
              Content Manager
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Навигация</SidebarGroupLabel>

          <SidebarMenu>
            {menu.map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton>
                  <NavLink to={item.url} className={'flex gap-2 items-center'}>
                    <item.icon />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Управление</SidebarGroupLabel>

          <SidebarMenu>
            {manageMenu.map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton>
                  <NavLink to={item.url} className={'flex gap-2 items-center'}>
                    <item.icon />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}