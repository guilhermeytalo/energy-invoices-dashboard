import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DataTable } from './table/data-table';
import { columns } from './table/columns';

interface InvoiceProps<TData> {
  invoices: TData[];
}

const invoices = [
  {
    id: 'INV001',
    title: 'Paid',
    status: 'Paid',
    label: 'algo',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
];

export function InvoicesComponent() {
  return (
    <DataTable data={invoices} columns={columns} />
  );
}
