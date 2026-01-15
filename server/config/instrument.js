// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://cba95ce68880056aee5329c5918ed0a9@o4510029991444480.ingest.us.sentry.io/4510714421772288",
  integrations: [
    Sentry.mongooseIntegration(),
  ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});