import './App.css';
import Navbar from './Navbar';
import { Container, Grid } from '@mui/material';
import Result from './Result';
import SliderSelect from './SliderSelect';
import Tenure from './Tenure';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    homeValue: 3500,
    downPayment: 3500 * 0.2,
    loanAmount: 3500 * 0.8,
    loanTerm: 5,
    interestRate: 2,
  });
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item="true" md={6}>
            <SliderSelect data={data} setData={setData} />
            <Tenure data={data} setData={setData} />
          </Grid>
          <Grid item="true" md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
