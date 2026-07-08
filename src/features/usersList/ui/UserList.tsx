import { Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "shared/ui-kit/card";

import { Badge } from "shared/ui-kit/badge";

import {Button} from 'shared/ui/Button/Button.tsx';
import {Avatar, AvatarFallback} from 'shared/ui-kit/avatar.tsx';
import {useGetUsersQuery, type User} from 'entities/users/model';

export function UsersList() {
  const {
    data: users = [],
    isLoading,
    error,
  } = useGetUsersQuery();

  const handleRemoveUser = (id: number) => {
    console.log(id);
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки пользователей.</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Список пользователей</CardTitle>
        <CardDescription>
          Все зарегистрированные пользователи
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {users.map((user: User) => (
          <div
            key={user.id}
            className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((v) => v[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{user.name}</p>

                  <Badge
                    variant={user.role === "content" ? "default" : "secondary"}
                  >
                    {user.role === "content"
                      ? "Контент"
                      : "Маркетинг"}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="secondary">
                ID {user.id}
              </Badge>

              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleRemoveUser(user.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {users.length === 0 && (
          <div className="py-10 text-center text-muted-foreground">
            Пользователей пока нет
          </div>
        )}
      </CardContent>
    </Card>
  );
}