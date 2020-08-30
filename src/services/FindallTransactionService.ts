import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class FindallTransactionService {

    private transactionsRepository: TransactionsRepository;

    constructor(transactionsRepository: TransactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }

    public execute(): Transaction[] {
        return this.transactionsRepository.all();
    }

}

export default FindallTransactionService;