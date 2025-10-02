export const handlePhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D/g, ''); // Remove tudo que não for número

    // Aplica a máscara para telefones no formato (00) 00000-0000
    if (value.length <= 10) {
        value = value.replace(/^(\d{2})(\d{0,5})(\d{0,4})$/, '($1) $2-$3');
    } else {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }

    e.currentTarget.value = value; // Atualiza o valor diretamente no campo
};