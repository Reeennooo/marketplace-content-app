import { Plus } from "lucide-react";
import { Button } from 'shared/ui/Button/Button.tsx';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "shared/ui-kit/card";
import {KidsList} from 'features/kidsList/ui/KidsList.tsx';
import {useAddKidMutation, useGetKidsQuery} from 'entities/kids/model';


export function DashboardKids() {
  const { data: kids = [] } = useGetKidsQuery();

  const [addKid, { isLoading: isAdding }] =
    useAddKidMutation();

  const handleAddKid = () => {
    addKid({
      name: `Ребёнок ${kids.length + 1}`,
      age: Math.floor(Math.random() * 8),
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Управление списком детей
          </p>
        </div>

        <Button onClick={handleAddKid} disabled={isAdding}>
          <Plus className="mr-2 h-4 w-4" />
          {isAdding ? "Добавляем..." : "Добавить"}
        </Button>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Всего детей</CardDescription>
            <CardTitle className="text-3xl">
              {kids.length}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Средний возраст</CardDescription>
            <CardTitle className="text-3xl">
              {kids.length
                ? (
                  kids.reduce(
                    (sum, kid) => sum + kid.age,
                    0
                  ) / kids.length
                ).toFixed(1)
                : 0}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Младше 5 лет</CardDescription>
            <CardTitle className="text-3xl">
              {kids.filter((kid) => kid.age < 5).length}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <KidsList />
    </div>
  );
}