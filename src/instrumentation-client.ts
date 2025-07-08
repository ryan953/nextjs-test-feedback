// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const DSN = {
  'sentry-test/ryan-nextjs-test-feedback': 'https://223ff754cd7be1037ac9468df1ceed65@o19635.ingest.us.sentry.io/4509520745463808',
};

Sentry.init({
  dsn: DSN['sentry-test/ryan-nextjs-test-feedback'],

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      autoInject: false,
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 1.0,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;