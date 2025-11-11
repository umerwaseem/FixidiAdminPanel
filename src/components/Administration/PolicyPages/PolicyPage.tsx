import React from "react";
import { Container, Typography, Box, Divider, Paper } from "@mui/material";
import { motion } from "framer-motion";
import HpHeader from "../../frontend-pages/shared/header/HpHeader";

interface Section {
  title: string;
  content: string[];
}

interface PolicyPageProps {
  title: string;
  mainContent: string;
  contentDescription: string;
  sections: Section[];
  effectiveDate?: string;
  lastUpdated?: string;
  showProButton?: boolean;
}

const PolicyPage: React.FC<PolicyPageProps> = ({
  title,
  mainContent,
  contentDescription,
  sections,
  effectiveDate,
  lastUpdated,
  showProButton = false,
}) => {
  return (
    <>
      <HpHeader showProButton={showProButton} />
      <Box
        sx={{
          background: "linear-gradient(180deg, #f5f8ff 0%, #ffffff 100%)",
          minHeight: "100vh",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: 4,
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
            >
              <Typography
                variant="h3"
                fontWeight={800}
                textAlign="center"
                gutterBottom
                sx={{
                  background: "linear-gradient(90deg, #3f51b5, #2196f3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title}
              </Typography>

              {effectiveDate && lastUpdated && (
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  color="text.secondary"
                  mb={4}
                >
                  Effective Date: {effectiveDate} | Last Updated: {lastUpdated}
                </Typography>
              )}
 {mainContent && (
                <Typography
                  variant="body1"
                  textAlign="justify"
                  color="text.primary"
                  mb={2}
                  sx={{ fontWeight: 500 }}
                >
                  {mainContent}
                </Typography>
              )}

              {/* Content Description */}
              {contentDescription && (
                <Typography
            
                  textAlign="justify"
                  color="text.secondary"
                  mb={4}
                >
                  {contentDescription}
                </Typography>
              )}

              <Divider sx={{ mb: 4 }} />

              {sections.map((section, index) => (
                <Section key={index} title={section.title} content={section.content} />
              ))}
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

const Section: React.FC<{ title: string; content: string[] }> = ({ title, content }) => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h5" fontWeight={700} gutterBottom color="primary">
      {title}
    </Typography>
    {content.map((text, index) => (
      <Typography key={index} variant="body1" color="text.secondary" paragraph   sx={{ textAlign: "justify" }} >
        {text}
      </Typography>
    ))}
  </Box>
);

export default PolicyPage;
