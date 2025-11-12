import PolicyPage from './PolicyPage';

const privacySections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect personal and non-personal information that helps us operate our business and provide quality service.',
      '<b>a. Information You Provide to Us</b>',
      'When you use Fixidi, you may provide: ',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Personal details</b>: Name, email address, phone number, and home address',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Service details</b>: Description of your job request, preferred date/time, and any related notes',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Payment information</b>: Limited billing details used for processing payments through our secure third-party payment provider (e.g., Stripe, PayPal)',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Communications</b>: Messages, service feedback, or reviews submitted through the platform',
      '<b>b. Information Collected Automatically</b>',
      'When you visit our website, we automatically collect:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• IP address, browser type, and device information',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Pages visited, time spent, and referral links',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• General location data (e.g., city or region within Ontario)<b>Communications</b>: Messages, service feedback, or reviews submitted through theplatform',
      'We use cookies and similar technologies to improve your experience, remember preferences, and analyze website usage.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect to:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Provide and manage non-licensed handyman services',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Connect you with suitable local service providers in your neighborhood',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Communicate with you regarding bookings, updates, or support requests',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Process secure payments and send receipts',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Improve our website, services, and customer experience',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Ensure platform safety, prevent fraud, and comply with legal obligations',
    ],
  },
  {
    title: '3. How We Share Information',
    content: [
      'We may share your information with:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Local service providers:</b> To facilitate your requested job and allow communication',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Payment processors:</b> For secure handling of transactions (e.g., Stripe, PayPal)',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Service partners and vendors:</b> For hosting, analytics (e.g., Google Analytics), or customer support',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Legal authorities:</b> If required by law, regulation, or court order',
      'We do <b>not</b> sell, rent, or trade your personal information to third parties.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'Fixidi takes reasonable and industry-standard measures to protect your personal information from unauthorized access, loss, or misuse. However, please be aware that no online system can be completely secure.',
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      'We retain personal information only for as long as necessary to:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Provide our services',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Comply with applicable laws and tax requirements',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Resolve disputes and enforce agreements',
      'Once no longer needed, your data will be securely deleted or anonymized.',
    ],
  },
  {
    title: '6. Your Rights and Choices',
    content: [
      'As a resident of Ontario and Canada, you have the right to:',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Access and correct your personal information',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Withdraw consent where applicable',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Request deletion of your data (subject to legal requirements)',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Opt out of marketing emails by clicking the “unsubscribe” link in any message',
      'To make a request, contact us at: <b>privacy@fixidi.com</b>',
    ],
  },
  {
    title: '7. Cookies',
    content: [
      "Fixidi uses cookies to:",
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Enhance user experience',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Remember preferences',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Analyze traffic and website performance',
      'You can disable cookies in your browser settings, but this may affect certain website features.'
    ],
  },
  {
    title: '8. Links to Other Websites',
    content: [
      'Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. We encourage you to review their privacy policies before providing any personal information.',
    ],
  },
  {
    title: '9. Children’s Privacy',
    content: [
      'Fixidi’s services are intended for adults aged 18 and older. We do not knowingly collect personal information from minors. If we learn that we have collected data from a minor, we will delete it promptly.',
    ],
  },
  {
    title: '10. Updates to This Policy',
    content: [
      'We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised effective date. Continued use of our website or services means you accept those changes.',
    ],
  },
  {
    title: '11. Contact Us',
    content: [
        "If you have any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us at:",
        "<b>Fixidi</b>",
        "📧 Email: <b>support@fixidi.com</b>",
        "🌐 Website: <b>[www.fixidi.com]</b>",
        "📍 Region of Operation: Ontario, Canada",
      ],
  },
];

const PrivacyPolicy = () => (
  <PolicyPage
    title="Privacy Policy"
    mainContent="Fixidi (“we,” “our,” or “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.fixidi.com] and use our services to connect with local handymen for small household jobs that do not require licensed skilled workers."
    contentDescription="By using our website or services, you agree to the terms of this Privacy Policy."
    sections={privacySections}
    effectiveDate="November 15, 2025"
    lastUpdated="November 15, 2025"
  />
);

export default PrivacyPolicy;
