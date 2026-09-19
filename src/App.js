import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Grid } from '@mui/material';
import Result from './Result';
import SliderSelect from './SliderSelect';
import Tenure from './Tenure';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={5}>
        <Grid Item>
          <SliderSelect />
          <Tenure />
        </Grid>
        <Grid Item>
          <Result />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
