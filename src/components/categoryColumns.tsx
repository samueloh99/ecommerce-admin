"use client";

import { ColumnDef } from "@tanstack/react-table";

import { CategoryCellAction } from "@/components/categoryCellAction";

export type CategoryColumnType = {
  id: string;
  name: string;
  billboardLabel: string;
  createdAt: string;
};

export const CategoryColumns: ColumnDef<CategoryColumnType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({ row }) => row.original.billboardLabel,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CategoryCellAction data={row.original} />,
  },
];
