
import PolicyPage from "./PolicyPage";


const privacySections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect personal and non-personal information that helps us operate our business and provide quality service.",
      "When you use Fixidi, you may provide: Name, email address, phone number, home address, job details, payment info, and communications.",
      "Automatically collected data includes IP address, browser type, device info, pages visited, and general location. We use cookies and similar technologies to improve your experience.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "Provide and manage non-licensed handyman services.",
      "Connect you with local service providers.",
      "Communicate regarding bookings, updates, or support.",
      "Process secure payments.",
      "Improve our website and ensure platform safety.",
    ],
  },
  {
    title: "3. How We Share Information",
    content: [
      "Local service providers – to facilitate your job.",
      "Payment processors – for secure transactions.",
      "Service partners – for hosting, analytics, and support.",
      "Legal authorities – when required by law.",
      "We never sell or trade your personal information.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We use industry-standard measures to protect your information from unauthorized access, loss, or misuse. However, no system can be 100% secure.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain personal data only as long as necessary to provide services, comply with laws, and resolve disputes. Once no longer needed, your data is securely deleted or anonymized.",
    ],
  },
  {
    title: "6. Your Rights and Choices",
    content: [
      "As a resident of Ontario and Canada, you have the right to access, correct, or delete your data, withdraw consent, and opt out of marketing emails.",
      "To make a request, contact us at: privacy@fixidi.com",
    ],
  },
  {
    title: "7. Cookies",
    content: [
      "We use cookies to enhance experience, remember preferences, and analyze traffic. You can disable cookies in your browser settings.",
    ],
  },
  {
    title: "8. Links to Other Websites",
    content: [
      "Our website may contain links to external sites. We are not responsible for their privacy practices. Please review their policies before sharing information.",
    ],
  },
  {
    title: "9. Children’s Privacy",
    content: [
      "Fixidi’s services are for adults 18 and older. We do not knowingly collect data from minors. If discovered, such data will be deleted promptly.",
    ],
  },
  {
    title: "10. Updates to This Policy",
    content: [
      "We may update this Privacy Policy periodically. Continued use of our website means you accept those changes.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or your data, please contact us at:",
      "📧 Email: privacy@fixidi.com",
      "🌐 Website: www.fixidi.com",
      "📍 Region: Ontario, Canada",
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