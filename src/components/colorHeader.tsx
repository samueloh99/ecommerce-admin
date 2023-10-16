"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/dataTable";
import { Headings } from "@/components/headings";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/apiList";

import { ColorColumns, ColorColumnType } from "@/components/colorColumns";

interface ColorHeaderProps {
  data: ColorColumnType[];
}

export const ColorHeader: React.FC<ColorHeaderProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Headings
          title={`Colors (${data.length})`}
          description="Manage colors for your products"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={ColorColumns} data={data} />
      <Headings title="API" description="API Calls for Colors" />
      <Separator />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};
