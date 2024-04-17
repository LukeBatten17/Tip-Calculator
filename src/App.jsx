import { useEffect, useState } from 'react'
import './app.css'

function App() {

  const [total, setTotal] = useState(0)
  const [people, setPeople] = useState(1)
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)

  const handleReset = () => {
    setBill(0)
    setPeople(1)
    setTotal(0)
    setTip(0)
    setTipAmount(0)
  }

  useEffect(() => {
    setTipAmount(() => Math.round(((tip*bill)/people) * 100) / 100)
    setTotal(() => Math.round((((tip*bill) + bill)/ people) * 100) / 100)
  })

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-4 text-center tracking-[0.45em] text-3xl uppercase">
        <h1 className="text-dark-grayish-cyan font-bold">Spli</h1>
        <h1 className="text-dark-grayish-cyan font-bold">tter</h1>
      </div>

      <div className="bg-white p-4 flex flex-col gap-8 md:flex-row rounded-lg max-w-3xl">
        <div className='flex flex-col justify-evenly'>
            <div className="mb-4">
              <p className='mb-2'>Bill</p>
              <input type="text" placeholder='0' id='bill' onChange={(e) => setBill(Number(e.target.value))}/>
            </div>

            <div className="mb-4">
              <p className='mb-2'>Select Tip</p>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <button className='w-11/12 bg-very-dark-cyan text-white text-xl font-bold py-1 rounded-lg tracking-widest hover:bg-light-grayish-cyan hover:text-very-dark-cyan' onClick={() => setTip(0.05)}>5%</button>
                <button className='w-11/12 bg-very-dark-cyan text-white text-xl font-bold py-1 rounded-lg tracking-widest hover:bg-light-grayish-cyan hover:text-very-dark-cyan' onClick={() => setTip(0.1)}>10%</button>
                <button className='w-11/12 bg-very-dark-cyan text-white text-xl font-bold py-1 rounded-lg tracking-widest hover:bg-light-grayish-cyan hover:text-very-dark-cyan' onClick={() => setTip(0.15)}>15%</button>
                <button className='w-11/12 bg-very-dark-cyan text-white text-xl font-bold py-1 rounded-lg tracking-widest hover:bg-light-grayish-cyan hover:text-very-dark-cyan' onClick={() => setTip(0.25)}>25%</button>
                <button className='w-11/12 bg-very-dark-cyan text-white text-xl font-bold py-1 rounded-lg tracking-widest hover:bg-light-grayish-cyan hover:text-very-dark-cyan' onClick={() => setTip(0.5)}>50%</button>
                <input type="text" placeholder='Custom' id='custom' className='w-11/12 bg-very-light-grayish-cyan text-dark-grayish-cyan rounded-lg' onChange={(e) => setTip((Number(e.target.value)) / 100)}/>
              </div>
            </div>

            <div className="mb-4">
              <p className='mb-2'>Number of people</p>
              <input type="text" placeholder='1' id='people' onChange={(e) => setPeople(Number(e.target.value))}/>
            </div>
        </div>

        <div className='bg-very-dark-cyan text-white rounded-xl'>
          <div className='flex flex-col m-14'>
              <div className='flex  justify-between mb-10'>
                <div>
                  <h1>Tip Amount</h1>
                  <p className='text-grayish-cyan'>/ person</p>
                </div>
                <h1 className='text-4xl font-bold text-cyan'>{`$${tipAmount}`}</h1>
              </div>

              <div className='flex justify-between'>
                <div>
                  <h1>Total</h1>
                  <p className='text-grayish-cyan'>/ person</p>
                </div>
                <h1 className='text-4xl font-bold text-cyan '>{`$${total}`}</h1>
              </div>

              <div className='place-self-center'>
                <button className='bg-cyan text-very-dark-cyan mt-20 px-24 py-2 rounded-lg font-bold text-lg uppercase hover:bg-light-grayish-cyan' onClick={handleReset}>Reset</button>
              </div>
            </div>
        </div>   
      </div> 
    </div>
  )
}

export default App
