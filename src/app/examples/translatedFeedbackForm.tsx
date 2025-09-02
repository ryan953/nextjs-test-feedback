"use client";

import {useEffect, useState} from 'react';
import * as Sentry from "@sentry/nextjs";

type FeedbackIntegration = ReturnType<typeof Sentry.getFeedback>;

export default function TranslatedFeedbackForm() {
  const [feedback, setFeedback] = useState<FeedbackIntegration>();
  // Read `getFeedback` on the client only, to avoid hydration errors when server rendering
  useEffect(() => {
    setFeedback(Sentry.getFeedback());
  }, []);

  // Don't render custom feedback button if Feedback integration isn't installed
  if (!feedback) {
    return null;
  }

  return (
    <button
    className="hover:bg-hover px-4 py-2 rounded-md"
      type="button"
      onClick={async () => {
        const form = await feedback.createForm({
          tags: {component: 'TranslatedFeedbackForm'},

          /**
           * The label for the Feedback widget button that opens the dialog
           */
          triggerLabel: 'Lets get started',
          /**
           * The aria label for the Feedback widget button that opens the dialog
           */
          triggerAriaLabel: 'Send it!',
          /**
           * The label for the Feedback form cancel button that closes dialog
           */
          cancelButtonLabel: 'Nevermind',
          /**
           * The label for the Feedback form submit button that sends feedback
           */
          submitButtonLabel: 'Send it!',
          /**
           * The label for the Screenshot editor cancel buttons
           */
          confirmButtonLabel: 'I confirm',
          /**
           * The title of the Feedback form
           */
          formTitle: 'Feedback Test Area',
          /**
           * Label for the email input
           */
          emailLabel: 'Email or contact info',
          /**
           * Placeholder text for Feedback email input
           */
          emailPlaceholder: 'you@example.com or (555) 555-5555',
          /**
           * Label for the message input
           */
          messageLabel: "What's up?",
          /**
           * Placeholder text for Feedback message input
           */
          messagePlaceholder: 'Tell me about it',
          /**
           * Label for the name input
           */
          nameLabel: 'Who dis?',
          /**
           * Placeholder text for Feedback name input
           */
          namePlaceholder: 'Name, nickname, etc.',
          /**
           * Message after feedback was sent successfully
           */
          successMessageText: 'Thanks, we got it!',
          /**
           * Text which indicates that a field is required
           */
          isRequiredLabel: 'critical',
          /**
           * The label for the button that adds a screenshot and renders the image editor
           */
          addScreenshotButtonLabel: 'Add a pic',
          /**
           * The label for the button that removes a screenshot and hides the image editor
           */
          removeScreenshotButtonLabel: 'Drop the pic',
          /**
           * The label for the button that highlights portions ofthe screenshot
           */
          highlightToolText: 'Spotlight it',
          /**
           * The label for the button that hides portions of the screenshot
           */
          hideToolText: 'Not this part',
          /**
           * The label for the button that removed a highlight/hidden section of the screenshot.
           */
          removeHighlightText: 'Take it out',
        });
        form.appendToDom();
        form.open();
      }}
    >
      Give me feedback (translated)
    </button>
  );
}
