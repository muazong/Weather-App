import { TimePeriod } from '../enums';

/**
 * Determines the current time period based on the hour of the day.
 * @returns {TimePeriod} The corresponding time period.
 */
function getTimePeriod(): string {
  const hour: number = new Date().getHours();
  let timePeriod: string = '';

  if (hour < 6) timePeriod = TimePeriod.MORNING;
  else if (hour < 12) timePeriod = TimePeriod.NOON;
  else if (hour < 18) timePeriod = TimePeriod.AFTERNOON;
  else timePeriod = TimePeriod.EVENING;

  return timePeriod;
}

export { getTimePeriod };
