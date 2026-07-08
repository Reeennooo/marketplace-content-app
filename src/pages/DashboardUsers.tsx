import { Plus } from "lucide-react";

import { Button } from 'shared/ui/Button/Button.tsx';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "shared/ui-kit/card";


import {useAddUserMutation, useGetUsersQuery} from 'entities/users/model';
import {UsersList} from 'features/usersList/ui/UserList.tsx';


export function DashboardUsers() {
  const { data: users = [] } = useGetUsersQuery();

  const [addUser, { isLoading: isAdding }] = useAddUserMutation();

  const handleAddUser = () => {
    addUser({
      name: "Новый пользователь",
      email: `user${Date.now()}@example.com`,
      role: 'content'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Управление пользователями системы
          </p>
        </div>

        <Button onClick={handleAddUser} disabled={isAdding}>
          <Plus className="mr-2 h-4 w-4" />
          {isAdding ? "Добавляем..." : "Добавить"}
        </Button>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Всего пользователей</CardDescription>
            <CardTitle className="text-3xl">
              {users.length}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Активные</CardDescription>
            <CardTitle className="text-3xl">
              {users.length}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Новые</CardDescription>
            <CardTitle className="text-3xl">
              12
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <UsersList />
    </div>
  );
}