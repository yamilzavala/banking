import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fdbacb742f420e560713507dabebd4f3@o4509531027210240.ingest.us.sentry.io/4509531279917056",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});