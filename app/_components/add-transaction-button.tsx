'use client';

import { ArrowDownUpIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from '@prisma/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { MoneyInput } from './money-input';
import {
  PAYMENT_METHOD_OPTIONS,
  TRANSACTION_CATEGORY_OPTIONS,
  TRANSACTION_TYPE_OPTIONS,
} from '../_constsnts/transactions';
import { DatePicker } from './ui/date-picker';

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'O nome é obrigatório.',
  }),
  amount: z
    .number({
      required_error: 'O valor é obrigatório.',
    })
    .positive({
      message: 'O valor deve ser positivo.',
    }),
  type: z.nativeEnum(TransactionType, {
    required_error: 'O tipo é obrigatório.',
  }),
  category: z.nativeEnum(TransactionCategory, {
    required_error: 'A categoria é obrigatória.',
  }),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
    required_error: 'O método de pagamento é obrigatório.',
  }),
  date: z.date({
    required_error: 'A data é obrigatória.',
  }),
});

type formSchema = z.infer<typeof formSchema>;

export default function AddTransactionButton() {
  const form = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      amount: 50,
      type: TransactionType.EXPENSE,
      category: TransactionCategory.OTHER,
      date: new Date(),
      paymentMethod: TransactionPaymentMethod.CASH,
    },
  });

  const onSubmit = (data: formSchema) => {
    console.log({ data });
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button className="rounded-full font-bold">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Transação</DialogTitle>
          <DialogDescription className="text-pretty">
            Insira as informações abaixo
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o Valor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <MoneyInput
                      placeholder="Digite o valor..."
                      value={field.value}
                      onValueChange={({ floatValue }) =>
                        field.onChange(floatValue)
                      }
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um Tipo de Transação" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_TYPE_OPTIONS.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Método de Pagamento</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um Método de Pagamento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {PAYMENT_METHOD_OPTIONS.map((method) => (
                        <SelectItem key={method.value} value={method.value}>
                          {method.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma Categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSACTION_CATEGORY_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data</FormLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-xl"
                >
                  Cancelar
                </Button>
              </DialogClose>

              <Button
                type="submit"
                variant="default"
                className="w-full rounded-xl"
              >
                Adicionar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
