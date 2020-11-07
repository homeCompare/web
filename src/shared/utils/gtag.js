import {GA_TRACKING_ID} from '@/shared/config';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: `${window.location.host}${url}`,
  });
  console.debug('gtag', 'pageview', `${window.location.host}${url}`);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action, category, label, value) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
  console.debug('gtag', 'event', { action, category, label, value });
};
