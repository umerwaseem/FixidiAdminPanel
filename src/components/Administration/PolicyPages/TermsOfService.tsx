import PolicyPage from './PolicyPage';

const termsSections = [
  {
    title: '1. About Fixidi',
    content: [
      'Fixidi connects users (“Customers”) with independent handymen and service providers (“Service Providers”) for small household jobs that do not require licensed trades or specialized certifications (e.g., painting, furniture assembly, minor repairs, lawn mowing, snow removals, installations).',
      'Fixidi acts solely as an <b>online platform</b> to facilitate these connections. We are <b>not</b> an employer of Service Providers, nor do we directly perform any services requested through the Platform.',
    ],
  },
  {
    title: '2. Eligibility',
    content: [
      'By using Fixidi, you confirm that:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• You are at least 14 years of age and legally capable of entering into binding contracts.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• You reside in Ontario, Canada.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• You will provide accurate, current, and complete information when creating an account or booking a service.',
    ],
  },
  {
    title: '3. Services Provided',
    content: [
      'Fixidi allows you to:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Browse and request small home repair or improvement services.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Connect with local, independent Service Providers.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Make payments securely through our platform upon job completion.',
      'The scope of Fixidi’s role is limited to facilitating communication, scheduling, and payment between Customers and Service Providers.',
    ],
  },
  {
    title: '4. Independent Contractors',
    content: [
      'All Service Providers listed on Fixidi are <b>independent contractors</b>, not employees, agents, or representatives of Fixidi.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Service Providers are responsible for their own tools, materials, insurance, and compliance with applicable laws.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Fixidi does not guarantee the quality, safety, or legality of services performed, though we strive to verify and screen all providers before listing them.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Any dispute regarding work quality or payment will be handled in accordance with Section 10 (Dispute Resolution).',
    ],
  },
  {
    title: '5. Bookings and Payments',
    content: [
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• When you book a service, you agree to pay the total amount shown at checkout, which may include service fees and applicable taxes.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Payments are processed securely through third-party providers (e.g., Stripe or PayPal). Fixidi does not store your full payment information.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Payment is typically released to the Service Provider once the job is completed and confirmed by the Customer.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If a Customer cancels a booking, cancellation fees may apply depending on timing and service terms.',
    ],
  },
  {
    title: '6. Customer Responsibilities',
    content: [
      'By booking through Fixidi, you agree to:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Provide a safe, clean, and accessible work environment.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Ensure the requested job does not require a licensed trade (e.g., electrical, plumbing, HVAC).',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Provide accurate job descriptions and disclose any relevant property details.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Treat Service Providers with respect and professionalism.',
      
      'Fixidi reserves the right to deny or cancel bookings if unsafe or inappropriate conditions are reported.',
    ],
  },
  {
    title: '7. Service Provider Responsibilities',
    content: [
      'Service Providers using Fixidi agree to:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Perform services professionally, safely, and as described.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Maintain valid insurance and comply with applicable local regulations.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Not represent themselves as employees or agents of Fixidi.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Communicate promptly with Customers regarding scheduling or job details.',
    ],
  },
  {
    title: '8. Cancellations and Refunds',
    content: [
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Customers may cancel a booking before the scheduled service time; refunds will be subject to Fixidi’s cancellation policy.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If a Service Provider fails to appear or complete the agreed service, Customers should contact Fixidi support for assistance.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Refunds, where applicable, will be processed through the same payment method used for the booking.',
      'Fixidi reserves the right to issue refunds or credits at its discretion.',
    ],
  },
  {
    title: '9. Disclaimer and Limitation of Liability',
    content: [
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Fixidi provides its Platform “as is” and “as available” without warranties of any kind.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• We do not guarantee the quality, safety, or legality of services provided by Service Providers.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• To the fullest extent permitted by law, Fixidi is <b>not liable</b> for any damages, losses, or injuries arising from or related to:',

      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Work performed by Service Providers',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Customer or Service Provider conduct',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Use of or inability to use the Platform',


      'Your sole remedy for dissatisfaction with the Platform is to stop using Fixidi.',
    ],
  },
  {
    title: '10. Dispute Resolution',
    content: [
      'Fixidi aims to support fair and transparent resolutions between Customers and Service Providers.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If a dispute arises, both parties agree to first attempt an informal resolution through Fixidi’s support team at <b>support@fixidi.com</b>.',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• If unresolved, disputes may be handled through arbitration or small claims court in Ontario, Canada, in accordance with applicable laws.',
    ],
  },
  {
    title: '11. Intellectual Property',
    content: [
      'All content on Fixidi’s Platform — including text, logos, graphics, and software — is the property of Fixidi and protected by copyright and trademark laws. You may not copy,reproduce, or distribute our content without written permission.',

    ],
  },
  {
    title: '12. Privacy',
    content: [
      'Your use of Fixidi is also governed by our <a href=/privacy-policy>Privacy Policy</a>, which explains how we collect and protect your personal information.',
    ],
  },
  {
    title: '13. Termination',
    content: [
      'Fixidi may suspend or terminate access to your account if:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• You violate these Terms;',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• You engage in fraud, abuse, or unsafe behaviour; or',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• It is required by law or for security reasons.',
      'You may also close your account at any time by contacting us at <b>support@fixidi.com</b>.',
    ],
  },
  {
    title: '14. Changes to These Terms',
    content: [
      'We may update these Terms periodically. Any changes will take effect immediately upon posting on our website. Continued use of Fixidi means you accept the updated Terms.',
    ],
  },
  {
    title: '15. Governing Law',
    content: [
      'These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.',
      'Any legal actions or proceedings will take place in the courts of Ontario, Canada.',
    ],
  },
  {
    title: '16. Contact Us',
    content: [
        "For questions, feedback, or concerns about these Terms, please contact us:",
        "<b>Fixidi</b>",
        "📧 Email: <b>support@fixidi.com</b>",
        "🌐 Website: <b>[www.fixidi.com]</b>",
        "📍 Region of Operation: Ontario, Canada",
      ],
  },
];

const TermsOfService = () => (
  <PolicyPage
    title="Terms of Service"
    mainContent="Welcome to Fixidi (“we,” “our,” or “us”). These Terms of Service (“Terms”) govern your access to and use of our website [<b>www.fixidi.com</b>], mobile services, and related tools (collectively, the “Platform”)."
    contentDescription="By accessing or using Fixidi, you agree to these Terms and our Privacy Policy. If you do notagree, you may not use our Platform or services."
    sections={termsSections}
    effectiveDate="November 15, 2025"
    lastUpdated="November 15, 2025"
  />
);

export default TermsOfService;
