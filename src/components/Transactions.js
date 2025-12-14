import { useEffect, useState } from "react";
import { alchemy } from '../utils/Alchemy';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';

function Transactions() {
  const id = Number(useParams().id);

  const [txns, setTransactions] = useState(null);

  useEffect(() => {
    async function fetchTxns(id) {
      const transactions = (await alchemy.core.getBlockWithTransactions(id)).transactions;
      setTransactions(transactions)
    }

    fetchTxns(id);
  }, [id]); //render when id is updated (once on initial page load)

  //if block info hasn't loaded yet

  if (!txns) {
    return <div className="p-4"> Loading... </div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Block #{id}</h1>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">Transactions</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Transaction Hash</th>
            <th className="border border-gray-300 px-4 py-2 text-left">To</th>
            <th className="border border-gray-300 px-4 py-2 text-left">From</th>
          </tr>
        </thead>
        <tbody>
          {txns.map((txn, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 px-4 py-2">{index}</td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    <Link to={`/transaction/${txn.hash}`} className='underline hover: text-blue-500'>
                        {txn.hash}
                    </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    <Link to={`/address/${txn.to}`} className='underline hover: text-blue-500'> 
                        {txn.to}
                    </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    <Link to={`/address/${txn.from}`} className='underline hover: text-blue-500'> 
                        {txn.from}
                    </Link>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions