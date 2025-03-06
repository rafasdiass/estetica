export interface Galeria {
  id: number;
  tipo: 'antesDepois' | 'procedimento' | 'promocional'; // Define o tipo de imagem
  titulo: string; // Nome ou descrição da imagem
  descricao?: string; // Informação adicional (opcional)
  imagem: string; // URL da imagem
  imagemAntes?: string; // Opcional, usado apenas se for "antes e depois"
  imagemDepois?: string; // Opcional, usado apenas se for "antes e depois"
}
