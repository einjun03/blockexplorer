import { useEffect, useState } from "react";
import { alchemy } from '../utils/Alchemy';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';

function BlockDetails() {
  const id = Number(useParams().id);

  const [blockInfo, setBlockInfo] = useState(null);

  useEffect(() => {
    async function fetchBlock(id) {
      const block = await alchemy.core.getBlock(id);
      setBlockInfo(block)
    }

    fetchBlock(id);
  }, [id]); //render when id is updated (once on initial page load)

  //if block info hasn't loaded yet

  if (!blockInfo) {
    return <div className="p-4"> Loading... </div>;
  }

  //destructure once we have the data
  const { hash, miner, nonce, parentHash, transactions } = blockInfo;

  return (
    <div className="p-4">
        <h1>Block Details Page</h1>
        <p>Block Number: {id} </p>
        <p>Block Hash: {hash} </p>
        <p>Number of Transactions: 
            <Link to={`/block/${id}/transactions`} className='underline hover: text-blue-500'>
                {transactions.length}
            </Link> 
        </p>
    </div>
  );
}

export default BlockDetails;