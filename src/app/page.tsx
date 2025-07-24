import FeedbackButton from "./examples/feedbackButton";
import ToggleFeedbackButton from "./examples/toggleFeedbackButton";
import AttachToFeedbackButton from "./examples/attachToFeedbackButton";
import CreateFeedbackFromButton from "./examples/createFeedbackFormButton";
import MyFeedbackForm from "./examples/myFeedbackForm";
import CrashReportButton from "./examples/crashReportButton";
import ThumbsUpDownButtons from "src/app/examples/thumbsUpDownButtons";

export default function Home() {
  return (
    <div className="m-auto max-w-screen-lg">
      <h1 className="text-2xl mt-4">
        <a className="float-right" href="https://nextjs-test-feedback.vercel.app/">https://nextjs-test-feedback.vercel.app/</a>
        Feedback Test Area (<a href="https://github.com/ryan953/nextjs-test-feedback">Github</a>)
        
      </h1>
      <p>
        This is an example Next.JS website that implements the Sentry Feedback SDK.
        It shows how to trigger Feedback in various ways.
      </p>
      <ul className="raw flex flex-col gap-2">
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Feedback Button (<a href="https://github.com/ryan953/nextjs-test-feedback/blob/main/src/app/examples/feedbackButton.tsx">source</a>)</legend>
            <FeedbackButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Toggle Feedback Button (<a href="https://github.com/ryan953/nextjs-test-feedback/blob/main/src/app/examples/toggleFeedbackButton.tsx">source</a>)</legend>
            <ToggleFeedbackButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Attach To Feedback Button (<a href="https://github.com/ryan953/nextjs-test-feedback/blob/main/src/app/examples/attachToFeedbackButton.tsx">source</a>)</legend>
            <AttachToFeedbackButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Create Feedback From Button (<a href="https://github.com/ryan953/nextjs-test-feedback/blob/main/src/app/examples/createFeedbackFormButton.tsx">source</a>)</legend>
            <CreateFeedbackFromButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>My Feedback Form (<a href="https://github.com/ryan953/nextjs-test-feedback/blob/main/src/app/examples/myFeedbackForm.tsx">source</a>)</legend>
            <MyFeedbackForm />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Crash Report Button (<a href="https://github.com/ryan953/nextjs-test-feedback/blob/main/src/app/examples/crashReportButton.tsx">source</a>)</legend>
            <CrashReportButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Thumbs Up/Down Buttons (<a href="https://github.com/ryan953/nextjs-test-feedback/blob/main/src/app/examples/thumbsUpDownButtons.tsx">source</a>)</legend>
            <ThumbsUpDownButtons /> 
          </fieldset>
        </li>
      </ul>
    </div>
  );
}
