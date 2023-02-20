import mixpanel from 'mixpanel-browser';

export enum EventTypes {
  PageView = 'Page View',
  Click = 'Click',
  Submit = 'Submit',
  Error = 'Error',
}
type Dict = Record<string, any>;

export const initAnalytics = () => {
  mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, {
    debug: import.meta.env.DEV, // Enable debug mode in development.
  });
};

const trackPageView = (page: string) => {
  /* Tracking the page view. */
  mixpanel.track(EventTypes.PageView, { pageName: page });
};

/**
 * @param {EventTypes} eventType The type of event being logged.
 * @param {Dict} message The message to be logged.
 * @returns {void}
 */
export function logEvent(eventType: EventTypes, message: Dict): void {
  mixpanel.track(eventType, message);
}

const analytics = { initAnalytics, trackPageView, logEvent };

export default analytics;
