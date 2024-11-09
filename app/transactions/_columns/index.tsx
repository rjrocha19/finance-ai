'use client';

// biome-ignore lint/style/useImportType: <explanation>
import { ColumnDef } from '@tanstack/react-table';
// biome-ignore lint/style/useImportType: <explanation>
import { Transaction } from '@prisma/client';
import TransactionTypeBadge from '../_components/type-badge';
import { Button } from '@/app/_components/ui/button';
import { PencilIcon, TrashIcon } from 'lucide-react';

export const TRANSACTION_CATEGORY_LABES = {
  HOUSING: 'Habitação',
  TRANSPORTATION: 'Transporte',
  FOOD: 'Alimentação',
  ENTERTAINMENT: 'Entretenimento',
  HEALTH: 'Saúde',
  UTILITY: 'Utilidades',
  SALARY: 'Salario',
  EDUCATION: 'Educação',
  OTHER: 'Outros',
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: 'Cartão de Crédito',
  DEBIT_CARD: 'Cartão de Débito',
  BANK_TRANSFER: 'Transferência Bancária',
  BANK_SLIP: 'Boleto Bancário',
  CASH: 'Dinheiro',
  PIX: 'PIX',
  OTHER: 'Outros',
};

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
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABES[transaction.category],
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Método de Pagamento',
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: 'action',
    header: 'Ações',
    cell: () => {
      return (
        <div className="space-x-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <PencilIcon />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
