'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Transaction } from '@prisma/client';

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
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
