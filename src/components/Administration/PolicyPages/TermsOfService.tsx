import PolicyPage from "./PolicyPage";


 const termsSections  = [
    {
      title: "1. About Fixidi",
      content: [
        "Fixidi connects users (“Customers”) with independent handymen and service providers (“Service Providers”) for small household jobs that do not require licensed trades or specialized certifications (e.g., painting, furniture assembly, minor repairs, lawn mowing, snow removals, installations).",
        "Fixidi acts solely as an online platform to facilitate these connections. We are not an employer of Service Providers, nor do we directly perform any services requested through the Platform.",
      ],
    },
    {
      title: "2. Eligibility",
      content: [
        "By using Fixidi, you confirm that:",
        "• You are at least 14 years of age and legally capable of entering into binding contracts.",
        "• You reside in Ontario, Canada.",
        "• You will provide accurate, current, and complete information when creating an account or booking a service.",
      ],
    },
    {
      title: "3. Services Provided",
      content: [
        "Fixidi allows you to:",
        "• Browse and request small home repair or improvement services.",
        "• Connect with local, independent Service Providers.",
        "• Make payments securely through our platform upon job completion.",
        "The scope of Fixidi’s role is limited to facilitating communication, scheduling, and payment between Customers and Service Providers.",
      ],
    },
    {
      title: "4. Independent Contractors",
      content: [
        "All Service Providers listed on Fixidi are independent contractors, not employees, agents, or representatives of Fixidi.",
        "• Service Providers are responsible for their own tools, materials, insurance, and compliance with applicable laws.",
        "• Fixidi does not guarantee the quality, safety, or legality of services performed, though we strive to verify and screen all providers before listing them.",
        "• Any dispute regarding work quality or payment will be handled in accordance with Section 10 (Dispute Resolution).",
      ],
    },
    {
      title: "5. Bookings and Payments",
      content: [
        "• When you book a service, you agree to pay the total amount shown at checkout, which may include service fees and applicable taxes.",
        "• Payments are processed securely through third-party providers (e.g., Stripe or PayPal). Fixidi does not store your full payment information.",
        "• Payment is typically released to the Service Provider once the job is completed and confirmed by the Customer.",
        "• If a Customer cancels a booking, cancellation fees may apply depending on timing and service terms.",
      ],
    },
    {
      title: "6. Customer Responsibilities",
      content: [
        "By booking through Fixidi, you agree to:",
        "• Provide a safe, clean, and accessible work environment.",
        "• Ensure the requested job does not require a licensed trade (e.g., electrical, plumbing, HVAC).",
        "• Provide accurate job descriptions and disclose any relevant property details.",
        "• Treat Service Providers with respect and professionalism.",
        "Fixidi reserves the right to deny or cancel bookings if unsafe or inappropriate conditions are reported.",
      ],
    },
    {
      title: "7. Service Provider Responsibilities",
      content: [
        "Service Providers using Fixidi agree to:",
        "• Perform services professionally, safely, and as described.",
        "• Maintain valid insurance and comply with applicable local regulations.",
        "• Not represent themselves as employees or agents of Fixidi.",
        "• Communicate promptly with Customers regarding scheduling or job details.",
      ],
    },
    {
      title: "8. Cancellations and Refunds",
      content: [
        "• Customers may cancel a booking before the scheduled service time; refunds will be subject to Fixidi’s cancellation policy.",
        "• If a Service Provider fails to appear or complete the agreed service, Customers should contact Fixidi support for assistance.",
        "• Refunds, where applicable, will be processed through the same payment method used for the booking.",
        "Fixidi reserves the right to issue refunds or credits at its discretion.",
      ],
    },
    {
      title: "9. Disclaimer and Limitation of Liability",
      content: [
        "• Fixidi provides its Platform “as is” and “as available” without warranties of any kind.",
        "• We do not guarantee the quality, safety, or legality of services provided by Service Providers.",
        "• To the fullest extent permitted by law, Fixidi is not liable for any damages, losses, or injuries arising from or related to work performed, conduct, or use of the Platform.",
        "Your sole remedy for dissatisfaction with the Platform is to stop using Fixidi.",
      ],
    },
    {
      title: "10. Dispute Resolution",
      content: [
        "Fixidi aims to support fair and transparent resolutions between Customers and Service Providers.",
        "• If a dispute arises, both parties agree to first attempt an informal resolution through Fixidi’s support team at support@fixidi.com.",
        "• If unresolved, disputes may be handled through arbitration or small claims court in Ontario, Canada, in accordance with applicable laws.",
      ],
    },
    {
      title: "11. Intellectual Property",
      content: [
        "All content on Fixidi’s Platform — including text, logos, graphics, and software — is the property of Fixidi and protected by copyright and trademark laws.",
        "You may not copy, reproduce, or distribute our content without written permission.",
      ],
    },
    {
      title: "12. Privacy",
      content: [
        "Your use of Fixidi is also governed by our Privacy Policy, which explains how we collect and protect your personal information.",
      ],
    },
    {
      title: "13. Termination",
      content: [
        "Fixidi may suspend or terminate access to your account if:",
        "• You violate these Terms;",
        "• You engage in fraud, abuse, or unsafe behaviour; or",
        "• It is required by law or for security reasons.",
        "You may also close your account at any time by contacting support@fixidi.com.",
      ],
    },
    {
      title: "14. Changes to These Terms",
      content: [
        "We may update these Terms periodically. Any changes will take effect immediately upon posting on our website. Continued use of Fixidi means you accept the updated Terms.",
      ],
    },
    {
      title: "15. Governing Law",
      content: [
        "These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.",
        "Any legal actions or proceedings will take place in the courts of Ontario, Canada.",
      ],
    },
    {
      title: "16. Contact Us",
      content: [
        "If you have questions, feedback, or concerns about these Terms, please contact us:",
        "📧 Email: support@fixidi.com",
        "🌐 Website: www.fixidi.com",
        "📍 Region: Ontario, Canada",
      ],
    },
  ];


  const TermsOfService = () => (
  <PolicyPage
    title="Terms of Service"
    mainContent="Welcome to Fixidi (“we,” “our,” or “us”). These Terms of Service (“Terms”) govern youraccess to and use of our website [www.fixidi.com], mobile services, and related tools(collectively, the “Platform”)."
    contentDescription="By accessing or using Fixidi, you agree to these Terms and our Privacy Policy. If you do notagree, you may not use our Platform or services."

    sections={termsSections}
    effectiveDate="November 15, 2025"
    lastUpdated="November 15, 2025"
  />
);

export default TermsOfService;