'use client';

import * as Sentry from "@sentry/nextjs";

export default function MyFeedbackForm() {
  return (
    <form id="my-feedback-form" onSubmit={async event => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      
      const attachment = async () => {
        const attatchmentField = formData.get("attachment") as File;
        const data = new Uint8Array(
          await attatchmentField.arrayBuffer()
        );
        const attachmentData = {
          data,
          filename: 'upload', // Or pass attatchmentField.name,
          // No need to set `contentType` because it's encoded in the `data` array
        };
        return attachmentData;
      };
      
      Sentry.getCurrentScope().setTags({component: 'MyFeedbackForm'});
      Sentry.captureFeedback({
        name: String(formData.get('name')),
        email: String(formData.get('email')),
        message: String(formData.get('message')),
      }, {
        attachments: [await attachment()],
      });
    }}>
      <input name="name" placeholder="Your Name" />
      <input name="email" placeholder="Your Email" />
      <textarea name="message" placeholder="What's the issue?" />
      <input type="file" name="attachment" />
      <button type="submit">Submit</button>
    </form>
  );
}