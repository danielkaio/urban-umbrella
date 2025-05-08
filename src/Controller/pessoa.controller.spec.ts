import { PessoaController } from "src/Controller/PessoaController";
import { PessoaRepository } from "src/Repository/PessoaRepository";

describe('PessoaController', () => {
  let pessoaController: PessoaController;
  let pessoaRepository: PessoaRepository;

  beforeEach(() => {
    pessoaRepository = new PessoaRepository();
    pessoaController = new PessoaController(pessoaRepository);
  });

  describe('lista', () => {
    it('deve retornar uma lista de pessoas', async () => {
      const result = ['test'];

      // Mock do método findAll da instância do repositório
      jest.spyOn(pessoaRepository, 'lista').mockResolvedValue(result as any);

      // Chama o método do controller (ajuste o nome conforme seu método real)
      const resposta = await pessoaController.listar(); // ou pessoaController.findAll()

      expect(resposta).toEqual(result);
    });
  });
  describe('criar', () => {
    it('deve criar uma nova pessoa e retornar status 201', async () => {
      const novaPessoa = { nome: 'Maria' };
  
      jest.spyOn(pessoaRepository, 'salvar').mockResolvedValue(undefined);
  
      const resposta = await pessoaController.criar(novaPessoa);
  
      expect(pessoaRepository.salvar).toHaveBeenCalledWith(novaPessoa);
      expect(resposta).toEqual({
        statusCode: 201,
        message: 'Tudo certo!',
      });
    });
  }); 
  describe('atualizar', () => {
    it('deve atualizar os dados de uma pessoa e retornar os dados atualizados', async () => {
      const id = '123';
      const dadosAtualizados = { nome: 'Carlos' };
      const pessoaAtualizada = { id, nome: 'Carlos' };
  
      // Mocka o método atualizar do repositório
      jest.spyOn(pessoaRepository, 'atualizar').mockResolvedValue(pessoaAtualizada);
  
      const resposta = await pessoaController.atualizar(id, dadosAtualizados);
  
      expect(pessoaRepository.atualizar).toHaveBeenCalledWith(id, dadosAtualizados);
      expect(resposta).toEqual(pessoaAtualizada);
    });
  });
  
});
