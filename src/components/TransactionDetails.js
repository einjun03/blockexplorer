import { useEffect, useState } from "react";
import { alchemy } from '../utils/Alchemy';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';

import { formatEther } from 'ethers';

function TransactionDetails() {
    const txnHash = useParams().txnHash

  const [txn, setTransaction] = useState(null);

  useEffect(() => {
    async function fetchTxn(id) {
      const transaction = (await alchemy.core.getTransaction(txnHash));
      setTransaction(transaction)
    }

    fetchTxn(txnHash);
  }, [txnHash]); //render when id is updated (once on initial page load)

  //if block info hasn't loaded yet

  if (!txn) {
    return <div className="p-4"> Loading... </div>;
  }

  return (
    <div className="p-4">
        <h1 className="text-xl font-semibold mt-6 mb-2">Transactions Details Page</h1>
        <h2 className="text-l font-semibold mt-6 mb-2">Basic Information</h2>
        <p>Transaction Number: {txn.transactionIndex} </p>
        <p>Transaction Hash: {txn.hash}</p>
        <p>Sender Address: {txn.from}</p>
        <p>Reciever Address: {txn.to}</p>
        
        <h2 className="text-l font-semibold mt-6 mb-2">Transaction Details</h2>
        <p>Transaction Amount: {parseFloat(formatEther(txn.value.toString())).toFixed(4)} ETH</p>

        <h2 className="text-l font-semibold mt-6 mb-2">Gas and Pricing</h2>
        <p>gasLimit (Amount of gas ): {parseFloat(formatEther(txn.value.toString())).toFixed(8)} ETH</p>
        
    </div>
  );
}

export default TransactionDetails