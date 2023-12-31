"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/dataTable";
import { Headings } from "@/components/headings";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/apiList";

import { SizeColumns, SizeColumnType } from "@/components/sizeColumns";

interface SizeHeaderProps {
  data: SizeColumnType[];
}

export const SizeHeader: React.FC<SizeHeaderProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Headings
          title={`Sizes (${data.length})`}
          description="Manage sizes for your products"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={SizeColumns} data={data} />
      <Headings title="API" description="API Calls for Sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};
