"use client";

import {useEffect, useState} from 'react';
import * as Sentry from "@sentry/nextjs";

type FeedbackIntegration = ReturnType<typeof Sentry.getFeedback>;

export default function CreateFeedbackFromButton() {
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
          tags: {component: 'CreateFeedbackFromButton'}
        });
        form.appendToDom();
        form.open();
      }}
    >
      Give me feedback (createForm)
    </button>
  );
}
