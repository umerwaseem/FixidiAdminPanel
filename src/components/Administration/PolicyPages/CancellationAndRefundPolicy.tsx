
  import PolicyPage from "./PolicyPage";


  const cancellationSections  = [
      {
        title: "1. General Overview",
        content: [
          "Fixidi connects customers (“Customers”) with independent service providers (“Service Providers”) for small, non-licensed home improvement and repair jobs.", 
          "All bookings and payments are processed through our platform to ensure a safe and transparent experience. Cancellations and refunds are handled according to the timelines and conditions below.",
        ],
      },
      {
        title: "2. Customer Cancellations",
        content: [
          "<b>a. Free Cancellation Period</b>",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Full refunds</b> are available if a Customer cancels <b>at least 24 hours before</b> the scheduled service time.",
          "<b>b. Late Cancellations</b>",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If a Customer cancels <b>less than 24 hours</b> before the scheduled service time, a <b>cancellation fee of 25%</b> of the total booking amount may be charged to compensate the Service Provider for lost time and scheduling.",
          "<b>c. No-Show Policy</b>",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If the Customer fails to provide access to the property or is unavailable at the scheduled time, the booking will be marked as a <b>“no-show”</b> and <b>no refund</b> will be issued.",
        ],
      },
      {
        title: "3. Service Provider Cancellations",
        content: [
          "If a Service Provider cancels a booking:",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• The Customer will receive a <b>full refund</b> of the amount paid.",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Fixidi will make reasonable efforts to help the Customer <b>reschedule</b> or find another available Service Provider.",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Repeated cancellations by a Service Provider may result in suspension or removal from the platform.",
        ],
      },
      {
        title: "4. Rescheduling",
        content: [
          "Customers may reschedule a booking <b>once</b>, free of charge, if requested <b>at least 24 hours in advance</b>.",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Reschedule requests made <b>less than 24 hours before</b> the scheduled service time may be treated as a late cancellation.",
        ],
      },
      {
        title: "5. Unsatisfactory Service or Disputes",
        content: [
          "If you are unsatisfied with the service provided, please contact us at <b>support@fixidi.com</b> within <b>48 hours</b> of job completion.",
          "Fixidi will review each case individually. Possible resolutions may include:",

          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• A <b>partial refund</b>,",

          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• A <b>credit</b> toward a future booking, or",

          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Reassignment</b> of a new Service Provider to complete the job",

          "Refunds for dissatisfaction will only be issued when there is clear evidence of incomplete, unsafe, or poor-quality work, and after a fair review process.",

      

        ],
      },
      {
        title: "6. Refund Processing",
        content: [
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Approved refunds will be issued to the <b>original payment method</b> within <b>5–10 business days</b>, depending on your bank or payment provider.",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Fixidi does not cover fees or delays caused by third-party payment processors (e.g., Stripe, PayPal).",
        
        ],
      },
      {
        title: "7. Non-Refundable Situations",
        content: [
          "Refunds will <b>not</b> be issued for:",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Services that were completed as described.",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Dissatisfaction based solely on pricing, duration, or personal expectations unrelated to service quality.",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Work that required licensed trades, which falls outside Fixidi’s service scope.",
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Customer no-shows or access issues on the scheduled date.",
        ],
      },
      {
        title: "8. Policy Abuse",
        content: [
          "Fixidi reserves the right to refuse refund requests or suspend accounts if cancellation or refund policies are misused, or if fraudulent claims are suspected.",
        ],
      },
      {
        title: "9. Changes to This Policy",
        content: [
          "Fixidi may update this Cancellation and Refund Policy from time to time. Updates will be posted on our website with a new “Last Updated” date. Continued use of our platform after updates means you accept the revised policy.",
        ],
      },
      {
        title: "10. Contact Us",
        content: [
          "For any questions or refund requests, please contact us at:",
          "<b>Fixidi</b>",
          "📧 Email: <b>support@fixidi.com</b>",
          "🌐 Website: <b>[www.fixidi.com]</b>",
          "📍 Region of Operation: Ontario, Canada",
        ],
      },
    ];
  const CancellationAndRefundPolicy = () => (
    <PolicyPage
      title="Cancellation & Refund Policy"
          mainContent="This <b>Cancellation and Refund Policy</b> outlines how Fixidi (“we,” “our,” or “us”) handles cancellations, rescheduling, and refund requests for services booked through our website <b>[www.fixidi.com]</b> (the “Platform”)."
      contentDescription="By booking a service with Fixidi, you agree to the terms outlined below."

      sections={cancellationSections}
      effectiveDate="November 15, 2025"
      lastUpdated="November 15, 2025"
    />
  );

  export default CancellationAndRefundPolicy;