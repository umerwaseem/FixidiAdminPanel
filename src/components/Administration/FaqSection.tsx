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
} from '@mui/material';
import { ExpandMore, ChevronLeft, ChevronRight } from '@mui/icons-material';

const faqData = [
  {
    question: "What is Fixidi?",
    answer:
      "Hiring a professional/licensed contractor/skilled labor for a small job like gutter cleaning or switching the lightbulbs can get very expensive. There are many individuals in your neighborhood who can do the job for you efficiently - for a lot less! Hiring someone will supplement their income and leverage their skills and expertise while you get the help you need. \nHiring a professional/licensed contractor/skilled labor for a small job like gutter cleaning or switching the lightbulbs can get very expensive. There are many individuals in your neighborhood who can do the job for you efficiently - for a lot less! Hiring someone will supplement their income and leverage their skills and expertise while you get the help you need. \nWe make it easy to find reliable, background-checked service providers and pay securely once the job is done."},
  {
    question: "What types of jobs can I book on Fixidi?",
    answer:
      "You can book most small home maintenance or improvement tasks, including:\n• Furniture assembly and mounting\n• Painting and touch-ups\n• Minor drywall or flooring repairs\n• Caulking, sealing, or weatherproofing\n• TV wall mounting and picture hanging\n• General handyman work (non-licensed tasks)\nWe currently do not support jobs that require licensed professionals, such as electrical, plumbing, gas fitting, or HVAC services."
  },
  {
    question: "Where does Fixidi operate?",
    answer:
      "Fixidi currently operates across Ontario, Canada, with service providers available in most major cities and surrounding areas. We’re expanding to new locations regularly!"
  },
  {
    question: "How do I book a service?",
    answer:
      "Booking is simple:\n1. Visit www.fixidi.com\n2. Describe your project and location\n3. Get matched with a verified local handyman\n4. Confirm your booking and pay securely online\nYou’ll receive a confirmation email with all your booking details."
  },
  {
    question: "Can I choose my service provider?",
    answer:
      "Fixidi automatically matches you with the most suitable local handyman based on your job type, timing, and location. However, if you’ve had a great experience with someone before, you can request the same provider when booking again (subject to availability)." },
  {
    question: "Do I need to provide materials or tools?",
    answer:
      "Most handymen bring their own tools.\nIf your job requires specific materials (like paint, fixtures, or hardware), you can either:\n• Provide them yourself, or\n• Request that the provider purchase them in advance (costs will be added to your final bill)."
  },
  {
    question: "Are the service providers background checked?",
    answer:
      "Yes. All Fixidi service providers undergo identity verification and background screening before joining our platform to ensure customer safety and reliability."
  },
  {
    question: "How are payments handled?",
    answer:
      "All payments are processed securely through the Fixidi platform using trusted providers like Stripe or PayPal.\nYou pay only once the job is completed and confirmed. \nFixidi never stores your full credit card information."
  },
  {
    question: "Are quotes or estimates free?",
    answer: "Yes. Estimates provided through Fixidi are completely free and carry no obligation to book."
  },
  {
    question: "When am I charged for a booking?",
    answer:
      "Your payment method is authorized when you confirm a booking but not charged until:\n• •	The service is completed, and\n• You confirm that the job was done satisfactorily."
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. The price you see during checkout includes all applicable service fees and taxes.If any additional costs are needed (e.g., materials), your provider will confirm them with you before proceeding." },
  {
    question: "What if I need to cancel my booking?",
    answer:
      "You can cancel up to 24 hours before your appointment for a full refund.\nCancellations made less than 24 hours before may incur a 25% fee to cover the provider’s time. \nSee our Cancellation and Refund Policy for full details."
  },
  {
    question: "What if my handyman doesn’t show up?",
    answer:
      "If your provider cancels or doesn’t arrive, Fixidi will:\n• Arrange a replacement provider as quickly as possible, or\n• Issue you a full refund upon request."
  },
  {
    question: "What if I’m not satisfied with the work?",
    answer:
      "Your satisfaction matters. If you’re unhappy with the service, contact support@fixidi.com within 48 hours of job completion. \nWe’ll review your case and may offer a refund, credit, or follow-up visit depending on the situation."
  },
  {
    question: "Do I need an account to book?",
    answer:
      "Yes — creating an account helps you manage bookings, track service history, and contact providers easily. It’s free and takes less than a minute."
  },
  {
    question: "How do I contact Fixidi support?",
    answer:
      "You can reach our support team at support@fixidi.com. \nWe’re available 7 days a week to help with bookings, refunds, or any other issues."
  },
  {
    question: "How can I become a Fixidi service provider?",
    answer:
      "If you’re an experienced handyman interested in joining Fixidi, visit [www.fixidi.com/join] to apply.  \nYou’ll need to complete a background check and provide references before being approved."
  },
  {
    question: "Is Fixidi insured?",
    answer:
      "Fixidi requires all independent Service Providers to maintain appropriate liability insurance. \nHowever, Fixidi itself does not insure individual projects — customers should ensure their home insurance covers small repair work if applicable."
  },
  {
    question: "Is my personal information safe with Fixidi?",
    answer:
      "Yes. We take privacy seriously.\n All personal and payment information is protected under our Privacy Policy, in compliance with Canada’s PIPEDA regulations."
  },
  {
    question: "Can I tip my handyman?",
    answer:
      "Tipping is entirely optional, but always appreciated! You can tip your provider in cash or through the Fixidi platform after the job is complete."
  },
  {
    question: "Does Fixidi offer emergency or same-day service?",
    answer:
      "Yes — for select small jobs, same-day service may be available depending on provider availability in your area. \nUse the booking form or contact support to check if same-day help is possible."
  }
];

const ITEMS_PER_PAGE = 7;

export const FAQCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);

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
            mb: 1,
            lineHeight: 1.3,
          }}
        >
          Frequently Asked Questions (FAQs)
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Last Updated: November 15, 2025
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}
        >
          Welcome to Fixidi — Ontario’s trusted platform for small home repair and improvement jobs. Below you’ll find answers to our most common questions about how Fixidi works, bookings, payments, and more.
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
              '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.12)' },
              transition: 'all 0.3s ease',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                px: { xs: 2, sm: 3 },
                py: { xs: 1.5, md: 2 },
                '& .MuiAccordionSummary-content': { my: 1 },
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 2, sm: 3 }, pb: { xs: 2, md: 2.5 }, pt: 0 }}>
              <Typography
                color="text.secondary"
                sx={{ lineHeight: 1.7, fontSize: { xs: '0.9rem', sm: '0.95rem' }, whiteSpace: 'pre-line' }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 2, md: 3 }, mb: 2 }}>
        <IconButton onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0} sx={{
          border: 2, borderColor: 'divider', width: { xs: 44, md: 40 }, height: { xs: 44, md: 40 },
          '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
          '&:active': { transform: 'scale(0.95)' }, transition: 'all 0.2s',
        }}>
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
                height: 10, width: currentPage === index ? 32 : 10, borderRadius: 5,
                border: 'none', bgcolor: currentPage === index ? 'primary.main' : 'action.disabled',
                transition: 'all 0.3s ease', cursor: 'pointer',
                '&:hover': { bgcolor: currentPage === index ? 'primary.main' : 'primary.light', opacity: currentPage === index ? 1 : 0.7 },
                '&:active': { bgcolor: 'primary.dark' },
              }}
            />
          ))}
        </Box>

        <IconButton onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages - 1} sx={{
          border: 2, borderColor: 'divider', width: { xs: 44, md: 40 }, height: { xs: 44, md: 40 },
          '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
          '&:active': { transform: 'scale(0.95)' }, transition: 'all 0.2s',
        }}>
          <ChevronRight />
        </IconButton>
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>
        Showing questions {currentPage * ITEMS_PER_PAGE + 1}-{Math.min((currentPage + 1) * ITEMS_PER_PAGE, faqData.length)} of {faqData.length}
      </Typography>

      <Grid container justifyContent="center">
        <Grid size={{ xs: 12, lg: 5 }} display="flex" justifyContent="center">
          <Box mt={5} borderRadius="8px" display="inline-flex" justifyContent="center" alignItems="center" gap="4px" fontWeight={500}
            sx={{ border: (theme) => `1px dashed ${theme.palette.divider}`, padding: '7px 10px', cursor: 'pointer', '&:hover': { borderColor: 'primary.main' } }}
          >
            <Typography>Still have a question?</Typography>
            <Link href="mailto:support@fixidi.com" target="_blank" rel="noopener noreferrer" underline="hover" sx={{ color: 'primary.main', fontWeight: 600, ml: 1, '&:hover': { color: 'primary.dark' } }}>
              support@fixidi.com
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
