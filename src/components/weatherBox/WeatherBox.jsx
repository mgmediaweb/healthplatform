import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  WiCloud,
  WiNightPartlyCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "weather-icons-react";

const ShowIcon = ({opt}) => {
  return (
  <>
    { opt === 'Cloud' && (<WiCloud size={48} color='#000' />)}
    { opt === 'Mostly Cloudy' && (<WiCloud size={48} color='#000' />)}
    { opt === 'Mostly Sunny' && (<WiCloud size={48} color='#000' />)}    
    { opt === 'Sunny' && (<WiDaySunny size={48} color='#000' />)}
    { opt === 'Clear' && (<WiDaySunny size={48} color='#000' />)}
    { opt === 'Partly Sunny' && (<WiNightPartlyCloudy size={48} color='#000' />)}
    { opt === 'Partly Cloudy' && (<WiNightPartlyCloudy size={48} color='#000' />)}    
    { opt === 'Light Rain' && (<WiRain size={48} color='#000' />)}
    { opt === 'Rain Showers' && (<WiRain size={48} color='#000' />)}
    { opt === 'Rain' && (<WiRain size={48} color='#000' />)}
    { opt === 'Storm' && (<WiThunderstorm size={48} color='#000' />)}
    { opt === 'Snow' && (<WiSnow size={48} color='#000' />)}  
    { opt === 'Light Snow' && (<WiSnow size={48} color='#000' />)}    
    <p><small>{opt}</small></p>
  </>
  );
};

const WeatherBox = (props) => {
  const { description, feels_like, humidity, temperature } = props.data;

  return (
    <Card className="card">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: 50 }}>
            {temperature}
            º
            </Typography>
          </Grid>
          <Grid item xs={6} align="right">
            <ShowIcon opt={description} />
          </Grid>
          <Grid item xs={6} align="center">
            <Typography sx={{ fontSize: 14 }}  color="text.secondary">
              {`Humidity: ${humidity}`}
            </Typography>
          </Grid>
          <Grid item xs={6} align="center">
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {`Feels Like: ${feels_like}`}
            </Typography>
          </Grid>          
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WeatherBox;