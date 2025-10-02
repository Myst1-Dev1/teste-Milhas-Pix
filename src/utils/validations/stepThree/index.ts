import { z } from "zod";
import { validarCPF } from "../stepOne";

export const stepThreeSchema = z.object({
  cpfOfTheHolder: z
      .string()
      .nonempty('Digite um cpf')
      .min(11, "CPF deve ter 11 dígitos")
      .refine((cpf) => validarCPF(cpf), {
        message: "CPF inválido",
    }),
    accessLogin: z.string().nonempty("Digite o valor do login de acesso")
    .min(4, "O login deve ter no minimo 4 digitos"),
    password: z.string().nonempty("Digite a senha")
    .min(6, "A senha deve ter no minimo 6 digitos"),
    phone: z
    .string()
    .nonempty("Informe o telefone")
    .max(15, "O telefone deve ter no máximo 15 caracteres")
    .regex(/^\(\d{2}\)\d{5}-\d{4}$/, "Telefone inválido, use o formato (00)00000-0000")
});

export type StepThreeData = z.infer<typeof stepThreeSchema>;
