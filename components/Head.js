import Link from 'next/link';
import React from 'react';

const Head = () => {
  return (
    <header className=" text-center py-10 px-5">
      <h1 className="text-sm font-light mb-4 tracking-[10]">LUCAS<span className='ml-5 tracking-[10]'>MILLART</span></h1>
      <h2 className="text-5xl font-bold mb-6">
        Développeur Full Stack
      </h2>
      <p className="text-lg mb-6">
        Je développe des sites et applications web pensés pour maximiser l&apos;impact<br></br> et la performance du produit final.
      </p>
      <Link href="/projets" className='btn btn-primary btn-xl'>Projets</Link>
    </header>
  );
};

export default Head;