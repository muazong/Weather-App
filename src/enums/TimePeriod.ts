/**
 * Enum representing different periods of the day.
 */
enum TimePeriod {
  /** Morning (00:00 - 05:59) */
  MORNING = 'morning',

  /** Noon (06:00 - 11:59) */
  NOON = 'noon',

  /** Afternoon (12:00 - 17:59) */
  AFTERNOON = 'afternoon',

  /** Evening (18:00 - 23:59) */
  EVENING = 'evening',
}

export default TimePeriod;
