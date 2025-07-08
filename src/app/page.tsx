import * as Sentry from "@sentry/nextjs";

import FeedbackButton from "./examples/feedbackButton";
import ToggleFeedbackButton from "./examples/toggleFeedbackButton";
import AttachToFeedbackButton from "./examples/attachToFeedbackButton";
import CreateFeedbackFromButton from "./examples/createFeedbackFormButton";
import MyFeedbackForm from "./examples/myFeedbackForm";
import CrashReportButton from "./examples/crashReportButton";

type FeedbackIntegration = ReturnType<typeof Sentry.getFeedback>;
type FeedbackWidget = any; // Should be something like ReturnType<FeedbackIntegration['createWidget']>;

export default function Home() {
  return (
    <div className="m-auto max-w-screen-lg">
      <h1 className="text-2xl mt-4">Feedback Test Area</h1>
      <p>
        This Pokemart app is an example Next.JS website that simulates a
        storefront. It is instrumented with the Sentry SDK featuring Session
        Replay, Feedback, Distributed Tracing and of course Errors!.
      </p>
      <ul className="raw">
        <li>
          <div className="flex">
            <FeedbackButton />
          </div>
        </li>
        <li>
          <ToggleFeedbackButton />
        </li>
        <li>
          <AttachToFeedbackButton />
        </li>
        <li>
          <CreateFeedbackFromButton />
        </li>
        <li>
          <MyFeedbackForm />
        </li>
        <li>
          <CrashReportButton />
        </li>
      </ul>
    </div>
  );
}
