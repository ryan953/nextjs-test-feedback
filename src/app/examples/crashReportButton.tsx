'use client';

import * as Sentry from "@sentry/nextjs";

export default function CrashReportButton() {
  return (
    <button className="hover:bg-hover px-4 py-2 rounded-md" type="button" onClick={() => {
      Sentry.captureException('Crash Report Button Clicked', {
        data: {useCrashReport: true}
      });
    }}>
      Crash Report
    </button>
  );
}