export function UserManagement() {
  return (
    <div className="space-y-6">
      {/* Header блока страницы */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Общая сводка и ключевые метрики
        </p>
      </div>

      {/* KPI карточки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg bg-card">
          <p className="text-sm text-muted-foreground">Продажи</p>
          <p className="text-2xl font-bold">₽ 128 400</p>
        </div>

        <div className="p-4 border rounded-lg bg-card">
          <p className="text-sm text-muted-foreground">Заказы</p>
          <p className="text-2xl font-bold">342</p>
        </div>

        <div className="p-4 border rounded-lg bg-card">
          <p className="text-sm text-muted-foreground">Конверсия</p>
          <p className="text-2xl font-bold">4.8%</p>
        </div>
      </div>

      {/* Нижний блок */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-card min-h-[200px]">
          <h2 className="font-medium mb-2">Последние заказы</h2>
          <p className="text-sm text-muted-foreground">
            Здесь будет таблица заказов
          </p>
        </div>

        <div className="p-4 border rounded-lg bg-card min-h-[200px]">
          <h2 className="font-medium mb-2">График</h2>
          <p className="text-sm text-muted-foreground">
            Здесь будет график аналитики
          </p>
        </div>
      </div>
    </div>
  );
}