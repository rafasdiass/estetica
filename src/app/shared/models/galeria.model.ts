/**
 * Modelo para representar um item da galeria.
 * Agora temos apenas `imagem`, pois o "antes e depois" já está na mesma foto.
 */
export interface Galeria {
  id: number;
  tipo: 'antesDepois' | 'procedimento' | 'promocional';
  titulo: string; // Nome ou descrição do item
  descricao?: string; // Informação adicional (opcional)
  imagem: string; // URL da imagem única (mesmo para antesDepois)
}
