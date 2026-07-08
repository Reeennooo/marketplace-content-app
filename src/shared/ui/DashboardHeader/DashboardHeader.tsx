import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "shared/ui-kit/dropdown-menu";

import {Avatar, AvatarFallback, AvatarImage} from "shared/ui-kit/avatar";
import { ChevronDown } from "lucide-react";
import {Button} from 'shared/ui/Button/Button.tsx';
import { PanelLeft } from "lucide-react";
import {useSidebar} from 'shared/ui-kit/sidebar.tsx';
import {RoutePaths} from 'shared/types/routes.ts';

const routeTitles: Record<string, string> = {
  "/dashboard": "Главная",
  [RoutePaths.userManagement]: 'Пользователи',
  [RoutePaths.kidsManagement]: 'Дети',
  [RoutePaths.products]: 'Товары'
};

export function DashboardHeader() {
  const { pathname } = useLocation();

  const title = routeTitles[pathname] ?? "Dashboard";
  const { toggleSidebar } = useSidebar();

  return (
    <header className="h-14 border-b flex items-center justify-between px-6 gap-2">
      {/*<SidebarTrigger  />*/}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleSidebar}
      >
        <PanelLeft />
      </Button>

      <div className="flex items-center justify-between grow">
        {/* LEFT: title */}
        <h1 className="text-lg font-semibold">{title}</h1>

        {/* RIGHT: user block */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-3 rounded-md px-2 py-1 hover:bg-accent transition">
              {/* Avatar */}
              <Avatar className="h-8 w-8">
                <AvatarImage src="/images/avatar1.jpeg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              {/* Name + role */}
              <div className="text-left leading-tight">
                <p className="text-sm font-medium">Виктория</p>
                <p className="text-xs text-muted-foreground">Администратор</p>
              </div>

              {/* Arrow */}
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </DropdownMenuTrigger>

          {/* Dropdown */}
          <DropdownMenuContent align="end" className="w-48 bg-popover">
            <DropdownMenuItem>
            Профиль
            </DropdownMenuItem>

            <DropdownMenuItem>
            Настройки
            </DropdownMenuItem>

            <DropdownMenuItem className="text-red-500">
            Выйти
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}