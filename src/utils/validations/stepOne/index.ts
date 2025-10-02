import { z } from "zod";

export const stepOneSchema = z.object({
  product: z.string().nonempty("Escolha um produto"),
  cpf: z
    .string()
    .nonempty('Digite um cpf')
    .min(11, "CPF deve ter 11 dígitos")
    .refine((cpf) => validarCPF(cpf), {
      message: "CPF inválido",
    }),
    program: z.string()
});

export type StepOneData = z.infer<typeof stepOneSchema>;

export function validarCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}