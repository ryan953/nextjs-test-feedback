"use client";

import type {RefObject} from 'react';
import * as Sentry from "@sentry/nextjs";
import {useEffect, useRef, useState} from 'react';

export default function FeedbackButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useFeedbackWidget({buttonRef, options: {
    tags: {
      component: 'FeedbackButton'
    }
  }})

  return (
    <div className="bg-darkRed hover:bg-red text-white px-2 py-1 rounded-md text-md block">
      <button ref={buttonRef}>
        Give Feedback
      </button>
    </div>
  );
}

function useFeedbackWidget({
  buttonRef,
  options = {},
}: {
  buttonRef?: RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>;
  options?: {
    tags?: Record<string, string>
  },
}) {
  const [feedback, setFeedback] = useState<ReturnType<typeof Sentry.getFeedback>>();
  // Read `getFeedback` on the client only, to avoid hydration errors when server rendering
  useEffect(() => {
    setFeedback(Sentry.getFeedback());
  }, []);

  useEffect(() => {
    if (!feedback) {
      return undefined;
    }

    if (buttonRef) {
      if (buttonRef.current) {
        return feedback.attachTo(buttonRef.current, options);
      }
    } else {
      const widget = feedback.createWidget(options);
      return () => {
        widget.removeFromDom();
      };
    }

    return undefined;
  }, [buttonRef, feedback, options]);

  return feedback;
}