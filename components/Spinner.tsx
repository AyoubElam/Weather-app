import Image from 'next/image';
import React from 'react';
import spinnerGif from '../public/spinner.gif'; // Renamed the import to avoid conflict

const Spinner = () => {
  return (
    <div className="w-[200px] m-auto block">
      <Image src={spinnerGif} alt="loading.." width={200} height={200} />
    </div>
  );
};

export default Spinner;
