import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { BillboardHeader } from "@/components/billboardHeader";
import { BillboardColumnType } from "@/components/billboardColumns";

export default async function BillboardsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumnType[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardHeader data={formattedBillboards} />
      </div>
    </div>
  );
}
