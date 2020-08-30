import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import FindallTransactionService from '../services/FindallTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();
const transactionsServiceCreate = new CreateTransactionService(transactionsRepository);
const transactionsServiceFindAll = new FindallTransactionService(transactionsRepository);


transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsServiceFindAll.execute();
    const balance = transactionsRepository.getBalance();

    return response.status(200).json({ transactions, balance });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    return response.status(201).json(transactionsServiceCreate.execute(request.body));
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
