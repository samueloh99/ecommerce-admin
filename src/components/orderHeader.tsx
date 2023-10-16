"use client";

import { DataTable } from "@/components/dataTable";
import { Headings } from "@/components/headings";
import { Separator } from "@/components/ui/separator";

import { OrderColumnType, OrderColumns } from "@/components/orderColumns";

interface OrderHeaderProps {
  data: OrderColumnType[];
}

export const OrderHeader: React.FC<OrderHeaderProps> = ({ data }) => {
  return (
    <>
      <Headings
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={OrderColumns} data={data} />
    </>
  );
};
