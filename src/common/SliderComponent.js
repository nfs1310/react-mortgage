import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({ defaultValue = 50, min, max, amount, label, unit, step, value, onChange }) => {
  return (
    <Stack my={1.5}>

      <Stack gap={5}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">{unit} {amount}</Typography>
      </Stack>

      <Slider
        defaultValue={defaultValue} 
        min={min} 
        max={max} 
        aria-label="Default" 
        valueLabelDisplay="auto" 
        marks
        step={step}
        value={value}
        onChange={onChange}
      />

      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="caption" color="text.secondary">{unit} {min}</Typography>
        <Typography variant="caption" color="error.main">{unit} {max}</Typography>
      </Stack>

    </Stack>
  )
}

export default SliderComponent
