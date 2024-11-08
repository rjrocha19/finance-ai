'use client';

// biome-ignore lint/style/useImportType: <explanation>
import { ColumnDef } from '@tanstack/react-table';
// biome-ignore lint/style/useImportType: <explanation>
import { Transaction } from '@prisma/client';
import TransactionTypeBadge from '../_components/type-badge';

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Método de Pagamento',
  },
  {
    accessorKey: 'date',
    header: 'Data',
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
  },
  {
    accessorKey: 'action',
    header: '',
  },
];
