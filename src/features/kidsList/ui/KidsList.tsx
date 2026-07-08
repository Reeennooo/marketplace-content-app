import { Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "shared/ui-kit/card";
import {Avatar, AvatarFallback} from 'shared/ui-kit/avatar.tsx';
import { Badge } from "shared/ui-kit/badge";
import {Button} from 'shared/ui/Button/Button.tsx';
import {type Kid, useGetKidsQuery} from 'entities/kids/model';

export function KidsList() {
  const {
    data: kids = [],
    isLoading,
    error,
  } = useGetKidsQuery();

  const handleRemoveKid = (id: number) => {
    console.log("Удалить ребенка:", id);
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки списка детей.</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Список детей</CardTitle>
        <CardDescription>
          Все зарегистрированные дети
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {kids.map((kid: Kid) => (
          <div
            key={kid.id}
            className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>
                  {kid.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-medium">{kid.name}</p>

                <p className="text-sm text-muted-foreground">
                  {kid.age} {kid.age === 1 ? "год" : kid.age < 5 ? "года" : "лет"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="secondary">
                ID {kid.id}
              </Badge>

              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleRemoveKid(kid.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {kids.length === 0 && (
          <div className="py-10 text-center text-muted-foreground">
            Детей пока нет
          </div>
        )}
      </CardContent>
    </Card>
  );
}