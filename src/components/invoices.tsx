import { columns } from './table/columns';
import { DataTable } from './table/data-table';

const invoices = [
  {
    id: 'INV001',
    title: 'invoice',
    status: 'pago',
    totalAmount: '$250.00', 
  },
];

export function InvoicesComponent() {
  return (
    <DataTable data={invoices} columns={columns} />
  );
}
