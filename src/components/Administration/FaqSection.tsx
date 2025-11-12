import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Box,
  Typography,
  Grid2 as Grid,
  Link,
  useTheme,
} from '@mui/material';
import { ExpandMore, ChevronLeft, ChevronRight } from '@mui/icons-material';

const faqData = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide comprehensive solutions including web development, design services, consulting, and ongoing support tailored to your business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      "Project timelines vary based on complexity and scope. A basic website typically takes 4-6 weeks, while more complex applications may require 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'Our pricing is project-based and depends on your specific requirements. We offer flexible payment plans and will provide a detailed quote after understanding your needs during our free consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes! We offer various maintenance packages to keep your project running smoothly, including updates, security patches, and technical support. Our team is always here to help you succeed.',
  },
  {
    question: 'Can you work with existing projects?',
    answer:
      "Absolutely! We're experienced in taking over and improving existing projects. We'll conduct a thorough audit and provide recommendations for enhancement and optimization.",
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      "We work across various industries including e-commerce, healthcare, education, finance, and technology startups. Our versatile team adapts to each industry's unique requirements.",
  },
  {
    question: 'How do you ensure project quality?',
    answer:
      'We follow industry best practices, conduct regular code reviews, implement automated testing, and maintain clear communication throughout the development process to ensure top-quality deliverables.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'We specialize in modern technologies including React, TypeScript, Node.js, and cloud platforms. We stay updated with the latest trends to provide cutting-edge solutions.',
  },
  {
    question: 'Do you sign NDAs?',
    answer:
      "Yes, we're happy to sign Non-Disclosure Agreements to protect your intellectual property and confidential information. Your trust and security are our priorities.",
  },
  {
    question: 'How does the collaboration process work?',
    answer:
      "We start with a discovery call, followed by planning, design, development, testing, and launch phases. You'll receive regular updates and have opportunities for feedback at each stage.",
  },
  {
    question: 'Can you help with design as well as development?',
    answer:
      'Yes! Our team includes talented designers who can create beautiful, user-friendly interfaces that align with your brand and business goals.',
  },
  {
    question: 'What makes you different from other agencies?',
    answer:
      "We combine technical excellence with genuine care for our clients' success. Our transparent communication, flexible approach, and commitment to quality set us apart.",
  },
  {
    question: 'Do you offer training for our team?',
    answer:
      'Yes, we provide comprehensive training and documentation to ensure your team can confidently manage and maintain the solutions we build for you.',
  },
  {
    question: 'How do you handle project changes?',
    answer:
      'We understand that requirements can evolve. We maintain flexibility while keeping you informed of any impact on timeline or budget, ensuring transparent decision-making.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      "We work on a milestone-based payment system. If you're not satisfied with a milestone, we'll work to make it right before moving forward. Your satisfaction is our priority.",
  },
  {
    question: 'Can you scale projects as our business grows?',
    answer:
      'Absolutely! We build scalable solutions designed to grow with your business. We can easily add features and capacity as your needs expand.',
  },
  {
    question: 'Do you provide emergency support?',
    answer:
      'Yes, we offer priority support packages for urgent issues. Our team is committed to keeping your systems running smoothly with minimal downtime.',
  },
  {
    question: 'How do you ensure data security?',
    answer:
      'We implement industry-standard security practices, including encryption, secure authentication, regular security audits, and compliance with data protection regulations.',
  },
  {
    question: 'Can you integrate with existing systems?',
    answer:
      "Yes, we're experienced in integrating with various third-party services, APIs, and legacy systems to ensure seamless operation across your technology stack.",
  },
  {
    question: 'What happens after project completion?',
    answer:
      "We provide post-launch support, monitor performance, and remain available for any questions or adjustments. We're partners in your ongoing success.",
  },
  {
    question: 'How can I get started?',
    answer:
      "Simply reach out through our contact form or schedule a free consultation. We'll discuss your needs, answer your questions, and outline a plan to bring your vision to life!",
  },
];

const ITEMS_PER_PAGE = 7;

export const FAQCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);
  const theme = useTheme();

  const getCurrentItems = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return faqData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)));
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1000,
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem' },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            lineHeight: 1.3,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}
        >
          Everything you need to know about our services
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        {getCurrentItems().map((faq, index) => (
          <Accordion
            key={currentPage * ITEMS_PER_PAGE + index}
            sx={{
              mb: { xs: 2, md: 2.5 },
              borderRadius: 2,
              '&:before': { display: 'none' },
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              '&:hover': {
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                px: { xs: 2, sm: 3 },
                py: { xs: 1.5, md: 2 },
                '& .MuiAccordionSummary-content': {
                  my: 1,
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: { xs: 2, sm: 3 },
                pb: { xs: 2, md: 2.5 },
                pt: 0,
              }}
            >
              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: '0.9rem', sm: '0.95rem' },
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, md: 3 },
          mb: 2,
        }}
      >
        <IconButton
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
          sx={{
            border: 2,
            borderColor: 'divider',
            width: { xs: 44, md: 40 },
            height: { xs: 44, md: 40 },
            '&:hover': {
              borderColor: 'primary.main',
              bgcolor: 'action.hover',
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
            transition: 'all 0.2s',
          }}
        >
          <ChevronLeft />
        </IconButton>

        <Box sx={{ display: 'flex', gap: 1 }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Box
              key={index}
              component="button"
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
              sx={{
                height: 10,
                width: currentPage === index ? 32 : 10,
                borderRadius: 5,
                border: 'none',
                bgcolor: currentPage === index ? 'primary.main' : 'action.disabled',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: currentPage === index ? 'primary.main' : 'primary.light',
                  opacity: currentPage === index ? 1 : 0.7,
                },
                '&:active': {
                  bgcolor: 'primary.dark',
                },
              }}
            />
          ))}
        </Box>

        <IconButton
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          sx={{
            border: 2,
            borderColor: 'divider',
            width: { xs: 44, md: 40 },
            height: { xs: 44, md: 40 },
            '&:hover': {
              borderColor: 'primary.main',
              bgcolor: 'action.hover',
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
            transition: 'all 0.2s',
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          display: 'block',
          textAlign: 'center',
          fontSize: { xs: '0.75rem', sm: '0.85rem' },
        }}
      >
        Showing questions {currentPage * ITEMS_PER_PAGE + 1}-
        {Math.min((currentPage + 1) * ITEMS_PER_PAGE, faqData.length)} of {faqData.length}
      </Typography>
      
      <Grid container justifyContent="center">
        <Grid size={{ xs: 12, lg: 5 }} display="flex" justifyContent="center">
          <Box
            mt={5}
            borderRadius="8px"
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            gap="4px"
            fontWeight={500}
            sx={{
              border: (theme) => `1px dashed ${theme.palette.divider}`,
              padding: '7px 10px',
              cursor: 'pointer',
              '&:hover': {
                borderColor: 'primary.main',
              },
            }}
          >
            <Typography>Still have a question?</Typography>
            <Link
              href="mailto:support@fixidi.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                ml: 1,
                '&:hover': {
                  color: 'primary.dark',
                },
              }}
            >
              support@fixidi.com
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
