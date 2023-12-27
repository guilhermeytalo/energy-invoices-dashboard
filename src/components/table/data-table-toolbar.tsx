'use client';

import { UploadIcon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';


import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filtrar contas..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <Button variant='outline' size="sm" className="h-8"><UploadIcon className='mr-2' />Upload</Button>
    </div>
  );
}
