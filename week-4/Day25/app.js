document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '1fa25a05b8c778713ab1254fe6fc6c5b';
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    searchBtn.addEventListener('click', async () => {
        const cityName = cityInput.value.trim();
        
        if (cityName === '') {
            alert('Please enter a city name.');
            return;
        }

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (response.ok) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const country = data.sys.country;

                weatherInfo.innerHTML = `
                    <p>Temperature: ${temperature}°C</p>
                    <p>Weather: ${description}</p>
                    <p>Location: ${cityName}, ${country}</p>
                `;
            } else {
                weatherInfo.textContent = 'City not found. Please try again.';
            }
        } catch (error) {
            console.error('Error:', error);
            weatherInfo.textContent = 'An error occurred. Please try again later.';
        }
    });
});
