import { ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "shared/ui-kit/card";

import { Badge } from "shared/ui-kit/badge";
import { Button } from "shared/ui/Button/Button.tsx";
import {type Product, useGetProductsQuery} from 'entities/products/model';


const statusMap = {
  none: {
    label: "Новый",
    className: "border-muted bg-muted text-muted-foreground",
  },
  in_progress: {
    label: "В работе",
    className:
      "border-yellow-200 bg-yellow-50 text-yellow-700",
  },
  approved: {
    label: "Согласовано",
    className:
      "border-green-200 bg-green-50 text-green-700",
  },
  uploaded: {
    label: "Подгружено",
    className:
      "border-blue-200 bg-blue-50 text-blue-700",
  },
};


const genderMap = {
  male: "Мужской",
  female: "Женский",
  unisex: "Унисекс",
};

interface ProductsListProps {
  products: Product[];
}

export function ProductsList({products}: ProductsListProps) {
  const {
    isLoading,
    error,
  } = useGetProductsQuery();


  if (isLoading) return <p>Загрузка...</p>;

  if (error) {
    return <p>Ошибка загрузки товаров.</p>;
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Список товаров
        </CardTitle>

        <CardDescription>
          Все товары маркетплейса
        </CardDescription>
      </CardHeader>


      <CardContent className="space-y-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="
              flex items-center justify-between gap-6
              rounded-lg border p-5
              transition-colors hover:bg-muted/50
            "
          >

            {/* Фото */}
            <img
              src={product.image}
              alt={product.title}
              className="
                h-28 w-28 rounded-lg
                border object-cover
              "
            />


            {/* Информация */}
            <div className="flex-1 space-y-2">

              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">
                  {product.title}
                </h3>

                <Badge
                  className={
                    statusMap[product.status].className
                  }
                >
                  {statusMap[product.status].label}
                </Badge>
              </div>


              <div className="grid grid-cols-2 gap-x-8 text-sm text-muted-foreground">

                <p>
                  <span className="font-medium text-foreground">
                    Артикул:
                  </span>{" "}
                  {product.article}
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    Бренд:
                  </span>{" "}
                  {product.brand}
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    Пол:
                  </span>{" "}
                  {genderMap[product.gender]}
                </p>

                <p>
                  <span className="font-medium text-foreground">
                    ID:
                  </span>{" "}
                  {product.id}
                </p>

              </div>

            </div>


            {/* Действия */}
            <Button
              variant="outline"
              size="icon"
            >
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>

          </div>
        ))}


        {products.length === 0 && (
          <div className="py-10 text-center text-muted-foreground">
            Товаров пока нет
          </div>
        )}

      </CardContent>
    </Card>
  );
}