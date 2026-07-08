import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "shared/ui-kit/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "shared/ui-kit/select";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "shared/ui-kit/card";
import {useGetProductsQuery} from 'entities/products/model';
import {ProductsList} from 'features/productsList/ui/ProductsList.tsx';


const statusOptions = [
  {
    value: "all",
    label: "Все статусы",
  },
  {
    value: "none",
    label: "Новый",
  },
  {
    value: "in_progress",
    label: "В работе",
  },
  {
    value: "approved",
    label: "Согласовано",
  },
  {
    value: "uploaded",
    label: "Подгружено",
  },
];


export function DashboardProducts() {
  const {
    data: products = [],
  } = useGetProductsQuery();


  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");


  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch =
        product.article
          .toLowerCase()
          .includes(search.toLowerCase());


      const matchesStatus =
        statusFilter === "all" ||
        product.status === statusFilter;


      return matchesSearch && matchesStatus;
    }
  );


  const inProgressCount = products.filter(
    (product) => product.status === "in_progress"
  ).length;


  const uploadedCount = products.filter(
    (product) => product.status === "uploaded"
  ).length;


  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <p className="text-sm text-muted-foreground">
          Управление товарами маркетплейса
        </p>
      </div>


      {/* KPI */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>
              Всего товаров
            </CardDescription>

            <CardTitle className="text-3xl">
              {products.length}
            </CardTitle>
          </CardHeader>
        </Card>


        <Card>
          <CardHeader className="pb-2">
            <CardDescription>
              В работе
            </CardDescription>

            <CardTitle className="text-3xl">
              {inProgressCount}
            </CardTitle>
          </CardHeader>
        </Card>


        <Card>
          <CardHeader className="pb-2">
            <CardDescription>
              Подгружено
            </CardDescription>

            <CardTitle className="text-3xl">
              {uploadedCount}
            </CardTitle>
          </CardHeader>
        </Card>

      </div>


      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">

        {/* Поиск */}
        <div className="relative max-w-sm flex-1">

          <Search
            className="
              absolute left-3 top-1/2
              h-4 w-4 -translate-y-1/2
              text-muted-foreground
            "
          />

          <Input
            placeholder="Поиск по артикулу..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value.trim())
            }
            className="pl-9"
          />

        </div>


        {/* Статус */}
        <Select
          value={statusFilter}
          onValueChange={(value) => setStatusFilter(value ?? '')}
        >
          <SelectTrigger className="w-full sm:w-[220px]">
            <SelectValue placeholder="Статус" />
          </SelectTrigger>

          <SelectContent className="bg-popover">
            {statusOptions.map((status) => (
              <SelectItem
                key={status.value}
                value={status.value}
              >
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

      </div>

      <ProductsList
        products={filteredProducts}
      />

    </div>
  );
}