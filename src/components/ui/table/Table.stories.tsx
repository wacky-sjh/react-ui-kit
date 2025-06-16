import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./table";
import * as React from "react";
import type { ColumnDef, SortingState } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../button/button";
import { Input } from "../input/input";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
};
export default meta;

type Story = StoryObj<typeof Table>;

// 샘플 데이터 타입 및 데이터
interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
}

const data: User[] = [
  { id: "1", name: "홍길동", email: "hong@example.com", status: "active" },
  { id: "2", name: "김철수", email: "kim@example.com", status: "inactive" },
  { id: "3", name: "이영희", email: "lee@example.com", status: "active" },
];

export const Basic: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// 컬럼 정의
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="px-0"
      >
        이름
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <span>{row.getValue("name")}</span>,
  },
  {
    accessorKey: "email",
    header: "이메일",
    cell: ({ row }) => <span>{row.getValue("email")}</span>,
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => (
      <span className={row.getValue("status") === "active" ? "text-green-600" : "text-gray-400"}>
        {row.getValue("status") === "active" ? "활성" : "비활성"}
      </span>
    ),
  },
];

// DataTable 컴포넌트
function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      // 간단한 전역 필터 (이름/이메일 포함)
      const value = row.getValue(columnId) as string;
      return value?.toLowerCase().includes(filterValue.toLowerCase());
    },
  });

  // 이름/이메일 전체 검색
  const filteredRows = table.getRowModel().rows.filter((row) => {
    const name = row.getValue("name") as string;
    const email = row.getValue("email") as string;
    return (
      name.toLowerCase().includes(globalFilter.toLowerCase()) ||
      email.toLowerCase().includes(globalFilter.toLowerCase())
    );
  });

  return (
    <div className="w-full space-y-4">
      <Input
        placeholder="이름 또는 이메일로 검색"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="max-w-xs"
      />
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {filteredRows.length ? (
            filteredRows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                데이터가 없습니다.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export const WithFilter: Story = {
  render: () => <DataTableDemo />,
};
