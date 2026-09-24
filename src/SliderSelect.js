import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, setData}) => {
  console.log("SliderSelect =>:", data);
  const bank_limit = 10000;
  return (
    <div>
      <SliderComponent
        defaultValue={20}
        min={1000}
        max={bank_limit}
        label="HomeValue"
        unit="$"
        amount={data.homeValue}
        step={100}
        value={data.homeValue}
        onChange={(event, newValue) => {
          setData({
            ...data, 
            homeValue: newValue,
            downPayment: newValue * 0.2,
            loanAmount: newValue * 0.8,
          });
          console.log("Home Value =>:", newValue);
        }}
      />
      <SliderComponent
        defaultValue={20}
        min={0}
        max={10000}
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(event, newValue) => {
          setData({
            ...data, 
            downPayment: newValue,
            loanAmount: data.homeValue - newValue,
          });
          console.log("Down Payment =>:", newValue);
        }}
      />
      <SliderComponent
        defaultValue={20}
        min={0}
        max={data.homeValue}
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
        step={100}
        value={data.loanAmount}
        onChange={(event, newValue) => {
          setData({
            ...data, 
            loanAmount: newValue,
            downPayment: data.homeValue - newValue,
          });
          console.log("Loan Amount =>:", newValue);
        }}
      />
      <SliderComponent
        defaultValue={2}
        min={2}
        max={18}
        label="Interest Rate"
        unit="%"
        amount={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(event, newValue) => {
          setData({
            ...data, 
            interestRate: newValue
          });
          console.log("Interest Rate =>:", newValue);
        }}
      />
      
    </div>
  )
}

export default SliderSelect
