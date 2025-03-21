# Weather Be

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weatherbe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weatherbe
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   Or, if you use Yarn:
   ```bash
   yarn install
   ```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
OWM_API_URL=https://api.openweathermap.org/data/2.5
OWM_TOKEN=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with your actual OpenWeatherMap API key.

### Running the Project

Start the development server:

```bash
npm run dev
```

Or, if you use Yarn:

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Viewing the Live Site

You can view the live version of the app at:
[https://weatherbe.vercel.app/](https://weatherbe.vercel.app/)

## TO DO:

- Create component tests using Jest.
- Create end-to-end (e2e) tests using Cypress.
- Add autocomplete functionality for city search.
- Add charts to display weather data visually.
