"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/dataTable";
import { Headings } from "@/components/headings";
import { Separator } from "@/components/ui/separator";

import {
  CategoryColumnType,
  CategoryColumns,
} from "@/components/categoryColumns";
import { ApiList } from "@/components/apiList";

interface CategoryHeaderProps {
  data: CategoryColumnType[];
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Headings
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={CategoryColumns} data={data} />
      <Headings title="API" description="API Calls for Categories" />
      <Separator />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
};
