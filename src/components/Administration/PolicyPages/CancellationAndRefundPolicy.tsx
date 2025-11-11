
import PolicyPage from "./PolicyPage";


 const cancellationSections  = [
    {
      title: "1. General Overview",
      content: [
        "Fixidi connects customers (“Customers”) with independent service providers (“Service Providers”) for small, non-licensed home improvement and repair jobs. All bookings and payments are processed through our platform to ensure a safe and transparent experience. Cancellations and refunds are handled according to the timelines and conditions below.",
      ],
    },
    {
      title: "2. Customer Cancellations",
      content: [
        "a. Free Cancellation Period: Full refunds are available if a Customer cancels at least 24 hours before the scheduled service time.",
        "b. Late Cancellations: If a Customer cancels less than 24 hours before the scheduled service time, a cancellation fee of 25% of the total booking amount may be charged.",
        "c. No-Show Policy: If the Customer fails to provide access to the property or is unavailable, no refund will be issued.",
      ],
    },
    {
      title: "3. Service Provider Cancellations",
      content: [
        "If a Service Provider cancels a booking:",
        "• The Customer will receive a full refund.",
        "• Fixidi will make reasonable efforts to reschedule or assign another Service Provider.",
        "• Repeated cancellations may result in account suspension.",
      ],
    },
    {
      title: "4. Rescheduling",
      content: [
        "Customers may reschedule a booking once, free of charge, if requested at least 24 hours in advance. Requests made less than 24 hours before may be treated as a late cancellation.",
      ],
    },
    {
      title: "5. Unsatisfactory Service or Disputes",
      content: [
        "If unsatisfied, contact us at support@fixidi.com within 48 hours of job completion. Possible resolutions include a partial refund, a credit, or reassignment of a new Service Provider. Refunds are only issued when there is clear evidence of incomplete or poor-quality work.",
      ],
    },
    {
      title: "6. Refund Processing",
      content: [
        "Approved refunds will be issued to the original payment method within 5–10 business days, depending on your payment provider. Fixidi does not cover delays caused by third-party processors.",
      ],
    },
    {
      title: "7. Non-Refundable Situations",
      content: [
        "Refunds will not be issued for:",
        "• Services completed as described.",
        "• Dissatisfaction based only on personal expectations.",
        "• Work requiring licensed trades (outside Fixidi’s scope).",
        "• Customer no-shows or access issues.",
      ],
    },
    {
      title: "8. Policy Abuse",
      content: [
        "Fixidi reserves the right to refuse refund requests or suspend accounts if policies are misused or fraudulent claims are suspected.",
      ],
    },
    {
      title: "9. Changes to This Policy",
      content: [
        "Fixidi may update this policy from time to time. Updates will be posted on our website with a new “Last Updated” date.",
      ],
    },
    {
      title: "10. Contact Us",
      content: [
        "Fixidi",
        "📧 Email: support@fixidi.com",
        "🌐 Website: www.fixidi.com",
        "📍 Region of Operation: Ontario, Canada",
      ],
    },
  ];
const CancellationAndRefundPolicy = () => (
  <PolicyPage
    title="Cancellation & Refund Policy"
        mainContent="This Cancellation and Refund Policy outlines how Fixidi (“we,” “our,” or “us”) handles cancellations, rescheduling, and refund requests for services booked through our website [www.fixidi.com] (the “Platform”)."
    contentDescription="By booking a service with Fixidi, you agree to the terms outlined below."

    sections={cancellationSections}
    effectiveDate="November 15, 2025"
    lastUpdated="November 15, 2025"
  />
);

export default CancellationAndRefundPolicy;