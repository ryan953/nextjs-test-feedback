"use client";

import * as Sentry from "@sentry/react";
import { Fragment } from "react";

export default function ThumbsUpDownButtons() {
  const feedback = Sentry.getFeedback();
  
  return (
    <Fragment>
      <strong>Was this helpful?</strong>
      <button
        title="I like this"
        onClick={async () =>{
          const form = await feedback?.createForm({
            messagePlaceholder: 'What did you like most?',
            tags: {
              component: 'ThumbsUpDownButtons',
              'feedback.type': 'positive',
            }
          });
          form?.appendToDom();
          form?.open();
        }}
      >
        Yes 👍
      </button>

      <button
        title="I don't like this"
        onClick={async () =>{
          const form = await feedback?.createForm({
            messagePlaceholder: 'How can we improve?',
            tags: {
              component: 'ThumbsUpDownButtons',
              'feedback.type': 'negative',
            }
          });
          form?.appendToDom();
          form?.open();
        }}
      >
        No 👎
      </button>
    </Fragment>
  );
}