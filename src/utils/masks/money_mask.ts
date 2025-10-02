export const handleMoneyChange = (e: React.FormEvent<HTMLInputElement>) => {
  let value = e.currentTarget.value;

  // Remove tudo que não for dígito
  value = value.replace(/\D/g, "");

  // Converte para número com duas casas decimais
  const numericValue = (Number(value) / 100).toFixed(2);

  // Formata no padrão brasileiro (vírgula como decimal)
  const formattedValue = numericValue.replace(".", ",");

  // Atualiza o valor do input
  e.currentTarget.value = formattedValue;
};
