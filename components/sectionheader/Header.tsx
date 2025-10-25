import React from 'react';
interface Prop{
  title:string
}

const Header = ({title}:Prop) => {
  return (
    <h1 className="text-black text-3xl font-bold my-5">
      {title}
    </h1>
  );
}

export default Header;
