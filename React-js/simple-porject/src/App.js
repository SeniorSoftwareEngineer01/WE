import React from 'react';
import Card from "./Compenent/card";
import { data } from "./Data";

function App() {
  const showdata = data.map((item, index) => (
    <Card key={index} title={item.title} disc={item.disc} img={item.img} alt={item.alt}
    style={{display:'flex' , alignItems:'center',justifyConter:'center' ,gap:'20px',flexWarp:'warp'}}
     />
  ));

  return <>{showdata}</>;
}

export default App;
