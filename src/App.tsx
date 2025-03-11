import { useEffect, useState } from 'react';
import { getTimePeriod } from './utils';
import { TimePeriod } from './enums';
import background from './assets/images/background';

function App() {
  const [appBackground, setAppBackground] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const updateBackground = () => {
      const timePeriod = getTimePeriod();

      if (timePeriod === TimePeriod.MORNING) {
        setAppBackground(background.morning_background);
      } else if (timePeriod === TimePeriod.NOON) {
        setAppBackground(background.noon_background);
      } else if (timePeriod === TimePeriod.AFTERNOON) {
        setAppBackground(background.afternoon_background);
      } else if (timePeriod === TimePeriod.EVENING) {
        setAppBackground(background.evening_background);
      }
    };
    updateBackground();

    const intervalId = setInterval(updateBackground, 1_800_000); // 30 minutes
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {appBackground && (
        <div
          style={{
            backgroundImage: `url(${appBackground})`,
          }}
          className={`flex flex-1 justify-center items-center h-screen w-full bg-cover`}
        ></div>
      )}
    </>
  );
}

export default App;
