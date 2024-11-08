'use client';

// biome-ignore lint/style/useImportType: <explanation>
import { ColumnDef } from '@tanstack/react-table';
// biome-ignore lint/style/useImportType: <explanation>
import { Transaction, TransactionType } from '@prisma/client';
import { Badge } from '@/app/_components/ui/badge';
import { CircleIcon } from 'lucide-react';

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-muted text-primary hover:bg-muted">
            <CircleIcon className="mr-2 fill-primary" size={10} />
            Depósito
          </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return 'Despesa';
      }
      return 'Investimento';
    },
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
