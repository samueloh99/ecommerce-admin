"use client";

import { ColumnDef } from "@tanstack/react-table";

import { SizeCellAction } from "@/components/sizeCellAction";

export type SizeColumnType = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

export const SizeColumns: ColumnDef<SizeColumnType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <SizeCellAction data={row.original} />,
  },
];
