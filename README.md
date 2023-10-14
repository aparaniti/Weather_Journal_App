# Weather Journal App

Welcome to the Weather Journal App! This simple web application allows you to get the current weather for a given location and journal your feelings about the weather.

## Getting Started

To use the Weather Journal App, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/aparaniti/weather_journal_app.git

2. Navigate to the project directory:

cd weather-journal-app

3. Install the required dependencies:

npm install

4. Acquire an API key from [OpenWeatherMap](https://openweathermap.org/). Replace `YOUR_API_KEY` in the `app.js` file with your actual API key.

```javascript
const apiKey = 'YOUR_API_KEY';
1. Start the server:

npm start
2. Open a web browser and visit http://localhost:3000 to access the Weather Journal App.

How to Use
Enter a ZIP code in the "Enter Zipcode here" field.

Describe how you're feeling today in the "How are you feeling today?" field.

Click the "Generate" button to retrieve the current weather for the entered location and your feelings.

The app will display the temperature, date, and your feelings for the most recent entry.

Dependencies
This project uses the following dependencies:

Express: A web application framework for Node.js.
Body-Parser: Middleware to parse JSON and URL-encoded data.
Cors: Middleware to enable CORS (Cross-Origin Resource Sharing) support.
Acknowledgments
This project was created as part of the Udacity Front-End Web Developer Nanodegree.
