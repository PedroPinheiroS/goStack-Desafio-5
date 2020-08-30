import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(dados: Transaction): Transaction {


    const {total} = this.transactionsRepository.getBalance();

    if ( dados.type === 'outcome' && total < dados.value ){
      throw new Error('Sem grana');
    }

    return this.transactionsRepository.create(dados);
  }
}

export default CreateTransactionService;
