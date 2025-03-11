import TimePeriod from '../enums';

function getTimePeriod() {
  const hour: number = new Date().getHours();
  let timePeriod: string = '';

  if (hour < 6) timePeriod = TimePeriod.MORNING;
  else if (hour < 12) timePeriod = TimePeriod.NOON;
  else if (hour < 18) timePeriod = TimePeriod.AFTERNOON;
  else timePeriod = TimePeriod.EVENING;

  return timePeriod;
}

export default getTimePeriod;
