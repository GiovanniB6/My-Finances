import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Adicionar Transação </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Informativo</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Informe..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Valor <br/>
            <i className='bx bxs-plus-square bx-tada' style={{ color: '#82c741' }}></i> Entrada | <i className='bx bxs-minus-square bx-tada' style={{ color: '#de4e4e' }}></i> Saida </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  )
}