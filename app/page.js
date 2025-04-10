'use client';
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

export default function Home() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [result, setResult] = useState('');

  const handleAddName = () => {
    if (name.trim() !== '') {
      setNames([...names, { option: name }]);
      setName('');
    }
  };

  const handleSpinClick = () => {
    if (names.length > 0) {
      const newPrizeNumber = Math.floor(Math.random() * names.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <main className='p-6 flex flex-col items-center gap-4'>
      <h1 className='text-3xl font-bold'>SorteAgora.com</h1>
      <div className='flex gap-2'>
        <input
          className='border p-2 rounded'
          placeholder='Digite um nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleAddName}>
          Adicionar
        </button>
      </div>
      <div className='w-full max-w-xl mt-4 flex flex-col items-center'>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={names}
          backgroundColors={['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']}
          onStopSpinning={() => {
            setMustSpin(false);
            setResult(names[prizeNumber].option);
          }}
        />
        <button
          className='mt-4 bg-green-500 text-white px-4 py-2 rounded'
          onClick={handleSpinClick}
          disabled={mustSpin || names.length === 0}
        >
          Girar
        </button>
        {result && <p className='text-xl font-semibold mt-4'>Resultado: {result}</p>}
      </div>
    </main>
  );
}