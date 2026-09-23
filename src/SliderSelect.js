import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  const bank_limit = 10000;
  return (
    <div>
      <SliderComponent
        defaultValue={20}
        min={1000}
        max={bank_limit}
        label="HomeValue"
        unit="$"
        amount={3500}
        step={100}
        onChange={(event, newValue) => {
          console.log("Home Value =>:", newValue);
        }}
      />
      <SliderComponent
        defaultValue={20}
        min={1000}
        max={10000}
        label="Down Payment"
        unit="$"
        amount={3500}
        step={100}
        onChange={(event, newValue) => {
          console.log("Down Payment =>:", newValue);
        }}
      />
      <SliderComponent
        defaultValue={20}
        min={1000}
        max={10000}
        label="Loan Amount"
        unit="$"
        amount={3500}
        step={100}
        onChange={(event, newValue) => {
          console.log("Loan Amount =>:", newValue);
        }}
      />
      <SliderComponent
        defaultValue={2}
        min={2}
        max={18}
        label="Interest Rate"
        unit="%"
        amount={2}
        step={0.5}
        onChange={(event, newValue) => {
          console.log("Interest Rate =>:", newValue);
        }}
      />
      
    </div>
  )
}

export default SliderSelect
