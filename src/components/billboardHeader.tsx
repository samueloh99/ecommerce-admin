"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/dataTable";
import { Headings } from "@/components/headings";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/apiList";

import { BillboardColumnType, BillboardColumns } from "./billboardColumns";

interface BillboardHeaderProps {
  data: BillboardColumnType[];
}

export function BillboardHeader({ data }: BillboardHeaderProps) {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Headings
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={BillboardColumns} data={data} />
      <Headings title="API" description="API Calls for Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
}
