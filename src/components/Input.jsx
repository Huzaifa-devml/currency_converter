import React from 'react'
import './input.css'

function Input({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions=[],
    selectcurrency="usd",
    className="",
}) {
  return (
    <div className={`inputcontainer${className}`}>
      {label && <label>{label}</label>}
 
    <div className='input-row'>
       
        <input 
        type="number" 
        value={amount}
        onChange={(e)=>onamountchange(e.target.value)}
        />
        <select 
        value={selectcurrency}
        onChange={(e)=>oncurrencychange(e.target.value)}
        >
       {currencyoptions.map((currency)=>(
        <option key={currency} value={currency}>
            {currency.toUpperCase()}
        </option>
       ))}

        </select>
      
    </div>
    </div>
  )
}

export default Input
