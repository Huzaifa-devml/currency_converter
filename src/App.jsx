import { useState } from 'react'
import Input from './components/Input'
import useCurrencyinfo from './hooks/customhooks'
import './App.css'



function App() {
  const [amount,setamount] = useState(0);//this is the amount that well write or change whenever we want to find the value
  const[from,setfrom]=useState("USD")//the option selected for the currency to convert from
  const[to,setto]=useState("INR");//the option selected for the currency to convert to
  const[convertedamount,setconvertedamount]=useState(0)//result after converting
  const currencyinfo=useCurrencyinfo(from)//use currency info is something that w designed on our own and it gives the value from the from section therefore we are calling it
  const options= Object.keys(currencyinfo)//when we use usecurrencyinfo it provides us an object with all its values like inr:83 euro:0.9 options just select the key pair of it and which can be used to check or make options
  const swap=()=>{
    setfrom(to)//used to swap the values by clicking the button swap this function gets triggered
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)//
  }
  const convert=()=>{
    setconvertedamount(amount*currencyinfo[to])// this is used to multiply the value from and to the number we want for example
    //we used usecurrencyinfo(from) this will give us value like in usd now from that usd usecurrencyinfo[inr] what is the rate for inr we get through this function
  }

  return (
    <>
      <div className="container">
        <div className="box-1">
          <div className="inputwrapper">
          <Input
          className='huu'
         label="From"//label used to represent what we are doing
         amount={amount}//amount that is written default value is o
         onamountchange={(val) => setamount(val)}//when amount is changes it calls onamountchanges and the amount is set to val
         oncurrencychange={(val) => setfrom(val)}//similarly when the currency is changed oncurrencychange gets trigerred and its set from
        currencyoptions={options}
        selectcurrency={from}
    />
    </div>
    

        </div>
        <button  className='btn' onClick={swap}>Swap</button>
        <div className="box-2">
        <div className="outputwrapper">
      <Input
      label="To"
      amount={convertedamount}
      onamountchange={(val) => setconvertedamount(val)}
      oncurrencychange={(val) => setto(val)}
      currencyoptions={options}
      selectcurrency={to}
    />
    </div>
        </div>
        <button  className='btn'  onClick={convert}>Convert</button>
      </div>
    </>
  )
}

export default App
