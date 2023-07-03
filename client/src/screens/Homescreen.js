import React from 'react';
import pizzas from '../pizzasdata';
import Pizza from '../components/Pizza';

export default function Homescreen() {
  return (
    <div>
        <h1>
            <div className='row'>
                {pizzas.map(pizza=>{
                    return <div className='col-md-4 p-3'>
                        <div className='m-3'>
                            <Pizza pizza={pizza} />
                            </div>

                        </div>
                })}
            </div>

         </h1>
    </div>
  )
}
