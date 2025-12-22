import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
    console.log(userData)
  }

  useEffect(() => {
    getData();
  }, [index])




  return (
    <div className='bg-black min-h-screen h-auto flex p-10 flex-col justify-center items-center text-white'>
      <div className='flex flex-wrap gap-4 '>
        {userData.map((elm, idx) => {
          return (
            <a href={elm.url} key={idx} target='_blank'>
              <div className='bg-white h-32 w-44 overflow-hidden rounded'>
                <img className='h-full w-full object-cover' src={elm.download_url} alt={"img" + idx} />
              </div>
              <h2 className='text-lg'>{elm.author}</h2>
            </a>
          )
        })}

      </div>
      <div className='flex gap-6 justify-center items-center'>
        <button onClick={() => setIndex(prev => Math.max(prev - 1, 1))} className='bg-amber-500 text-black px-5 py-2 rounded font-semibold text-sm'>
          Prev
        </button>
        <button onClick={() => { setIndex(prev => prev + 1) }} className='bg-amber-500 text-black px-5 py-2 rounded font-semibold text-sm'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App