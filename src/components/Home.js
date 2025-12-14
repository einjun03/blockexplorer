import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { alchemy } from '../utils/Alchemy';

function Home() {

//   const [blockNumber, setBlockNumber] = useState();

//   useEffect(() => {
//     async function getBlockNumber() {
//       setBlockNumber(await alchemy.core.getBlockNumber());
//     }

//     getBlockNumber();
//   }, []); //render once only on initial page load

// for testing: 
    const blockNumber = "24008899";

  return (
    <div className="bg-blue-500 text-white p-4">
      Most Recently Mined Block: 
      <Link to={`/block/${blockNumber}`} className='underline hover: text-blue-200'>
        {blockNumber}
      </Link>
    </div>
  );
}

export default Home;