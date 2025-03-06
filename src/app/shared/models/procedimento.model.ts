export interface Procedimento {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  valor: number; // Adicionando o campo para armazenar o preço do procedimento
}
