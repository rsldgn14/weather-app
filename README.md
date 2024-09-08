# Weather Forecasting Application

This project is a weather forecasting web application developed using **Next.js** and **Tailwind CSS**. It allows users to retrieve and display weather data for cities by using the Weatherbit API.

## Features

- **City Search:** Users can search for weather forecasts by entering the name of a city, and data is fetched from the Weatherbit API.
- **Table Display:** The forecasted weather data is shown in a table for easy viewing.
- **Day Selection:** Clicking on any day in the table updates the data display card with detailed information for that specific day.
- **Loading Indicator:** A loading spinner is displayed while fetching data from the API.
- **Data Caching:** Previously searched cities’ weather data is cached, so repeated searches for the same city don’t trigger additional API calls.
- **Responsive Design:** The layout is fully responsive, optimized for both desktop and mobile devices using Tailwind CSS.

## Bonus Features

- **Unit & Country Selection:** The infrastructure for future features like country selection and unit conversion (Celsius/Fahrenheit) has been established for easy extension.

## Technologies Used

- **Next.js:** For server-side rendering and API integration.
- **Tailwind CSS:** For rapid and responsive UI styling.
- **TypeScript:** Ensures type safety and scalability in development.
- **Weatherbit API:** Provides accurate weather forecast data.

## Future Improvements

- **Country Selection:** Users will be able to filter results by country.
- **Unit Conversion:** A toggle will be added to switch between Celsius and Fahrenheit for temperature display.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/rsldgn14/weather-app
2. Enter the file
   ```bash
   cd weather-app
3. Install node dependencies
   ```bash
   npm install
4. Run project
   ```bash
   npm run dev
  
This version is ready for your project! Let me know if anything needs to be adjusted.
