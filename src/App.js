import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Container, Grid } from '@mui/material';
import Result from './Result';
import SliderSelect from './SliderSelect';
import Tenure from './Tenure';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item="true" md={6}>
            <SliderSelect />
            <Tenure />
          </Grid>
          <Grid item="true" md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
