const mapDataToWeatherInterface = data => {
  const mapped = {
    city: data.name,
    country: data.sys.country,
    date: data.dt * 1000,
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    temperature: data.main.temp,
    description: data.weather[0].description,
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    condition: data.cod
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = data.main.temp_max;
    mapped.min = data.main.temp_min;
  }

  // remove undefined fields
  Object.keys(mapped).forEach(
    key => mapped[key] === undefined && delete data[key]
  );

  return mapped;
};

const handleResponse = response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: Location " + response.statusText);
  }
};

const getWeather = city => {
  return fetch(
    `${process.env.REACT_APP_WEATHER_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
  )
    .then(res => handleResponse(res))
    .then(result => {
      if (Object.entries(result).length) {
        const mappedData = mapDataToWeatherInterface(result);
        return mappedData;
      }
    });
};

export default getWeather;
