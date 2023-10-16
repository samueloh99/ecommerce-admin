"use client";

import { ColumnDef } from "@tanstack/react-table";

import { BillboardCellAction } from "@/components/billboardCellAction";

export type BillboardColumnType = {
  id: string;
  label: string;
  createdAt: string;
};

export const BillboardColumns: ColumnDef<BillboardColumnType>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <BillboardCellAction data={row.original} />,
  },
];
