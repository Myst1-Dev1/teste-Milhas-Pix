import { z } from "zod";

export const stepTwoSchema = z.object({
  milesToOffer: z
    .string()
    .min(1, "A quantidade de milhas deve ser maior que zero"),
  milesValue: z
  .string()
  .nonempty("Informe o valor por 1.000 milhas")
  .refine((val) => {
    const num = Number(val.replace(",", "."));
    return !isNaN(num) && num >= 14 && num <= 16.56;
  }, "O valor deve estar entre 14,00 e 16,56"),
  howToReceive:z.string().nonempty("Escolha como deseja receber o programa")
});

export type StepTwoData = z.infer<typeof stepTwoSchema>;
