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
      <h1 className="text-2xl mt-4">Feedback Test Area</h1>
      <p>
        This is an example Next.JS website that implements the Sentry Feedback SDK.
        It shows how to trigger Feedbakc in various ways.
      </p>
      <ul className="raw flex flex-col gap-2">
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Feedback Button</legend>
            <FeedbackButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Toggle Feedback Button</legend>
            <ToggleFeedbackButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Attach To Feedback Button</legend>
            <AttachToFeedbackButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Create Feedback From Button</legend>
            <CreateFeedbackFromButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>My Feedback Form</legend>
            <MyFeedbackForm />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Crash Report Button</legend>
            <CrashReportButton />
          </fieldset>
        </li>
        <li>
          <fieldset className="border-1 border-gray-300 rounded-md p-2">
            <legend>Thumbs Up/Down Buttons</legend>
            <ThumbsUpDownButtons /> 
          </fieldset>
        </li>
      </ul>
    </div>
  );
}
