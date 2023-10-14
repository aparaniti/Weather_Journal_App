const apiKey = 'bc059016381ce027cf4a3265f541aa11'; 
const units = 'imperial'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;

document.getElementById('generate').addEventListener('click', () => {
  const zipCode = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;

  const getWeatherData = async (zip) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Callback function for the "Generate" button
  const generateButtonCallback = async () => {
    const weatherData = await getWeatherData(zipCode);
    const temperature = Math.round(weatherData.main.temp);
    const date = new Date().toLocaleDateString();

    const newData = {
      temperature,
      date,
      userResponse: feelings,
    };

    // Function to make POST request to server
    const postData = async (path, data) => {
      try {
        const response = await fetch(path, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        return await response.json();
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    // Make a POST request to add data to projectData
    await postData('/data', newData);

    // Function to update the UI with retrieved data
    const updateUI = async () => {
      const response = await fetch('/data');
      try {
        const allData = await response.json();
        // Update the HTML elements with the retrieved data
        document.getElementById('temp').innerHTML = `${allData.temperature} degrees`;
        document.getElementById('content').innerHTML = allData.userResponse;
        document.getElementById('date').innerHTML = allData.date;
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Update the UI
    updateUI();
  };

  // Execute the callback function when "Generate" is clicked
  generateButtonCallback();
});

// Function to retrieve data from the server
const retrieveData = async () => {
  const request = await fetch('/all');
  try {
    // Transform the response into JSON
    const allData = await request.json();

    // Log the data to the console
    console.log(allData);

    // Update the DOM elements with the retrieved data
    document.getElementById('temp').innerHTML = Math.round(allData.temp) + 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById('date').innerHTML = allData.date;
  } catch (error) {
    console.log('Error:', error);
    // Handle the error appropriately
  }
};