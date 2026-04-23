import React, { ReactNode } from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Hr,
  Text,
  Button,
  Img,
  Link,
} from '@react-email/components';

// --- Types & Interfaces ---

interface SubunitCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  children: ReactNode;
}

// --- Reusable Components ---

const SubunitCard = ({ title, subtitle, buttonText, buttonHref, children }: SubunitCardProps) => (
  <Section style={styles.cardSection}>
    <Container style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
      <Hr style={styles.cardDivider} />
      
      {children}
      
      <Button href={buttonHref} style={styles.button}>
        {buttonText}
      </Button>
    </Container>
  </Section>
);

// --- Main Email Template ---

export default function AcademicAffairsUpdate() {
  return (
    <Html>
      <Head>
        <style>
          {`
            .btn-hover:hover { background-color: #142d5e !important; }
            ul { padding-left: 20px; margin: 10px 0 20px 0; }
            li { margin-bottom: 12px; font-family: ${fontFamily}; font-size: 16px; line-height: 26px; color: #333333; }
          `}
        </style>
      </Head>
      <Preview>Updates from Assessment & Evaluation, Scholarly Productivity & Innovation, and Accreditation & CQI.</Preview>
      
      <Body style={styles.main}>
        <Container style={styles.container}>
          
          {/* Header */}
          <Section style={styles.header}>
            <Img 
              src="https://www.belmont.edu/stories/_images/thomasffrist_college_of_medicine_seal.png" 
              alt="FCoM Seal" 
              width="140" 
              style={{ margin: '0 auto', paddingBottom: '20px' }} 
            />
            <Hr style={styles.headerDivider} />
          </Section>

          {/* Hero */}
          <Section style={styles.hero}>
            <Text style={styles.heroTitle}>Academic Affairs Monthly</Text>
          </Section>

          {/* Intro */}
          <Section style={styles.introSection}>
            <Text style={styles.editionText}>Spring 2026 Edition</Text>
            <Text style={styles.officeTitle}>
              Thomas F. Frist, Jr. College of Medicine<br/>
              <span style={styles.officeSubtitle}>Office of Academic Affairs</span>
            </Text>
            <Text style={styles.paragraph}>
              Welcome to the latest edition of the Academic Affairs Update. 
            </Text>
          </Section>

          {/* Card 1: Assessment & Evaluation */}
          <SubunitCard 
            title="Assessment & Evaluation" 
            subtitle="Evidence-Based Confidence"
            buttonText="Request a 1-on-1 Data Review"
            buttonHref="#"
          >
            <Text style={styles.paragraph}>
              The class has collectively tackled the equivalent of nearly four full Step 1 exams:
            </Text>
            <ul>
              <li><span style={styles.badge}>1,074</span> Total NBME-style items completed.</li>
              <li><span style={styles.badge}>83%</span> Collective average performance.</li>
            </ul>
          </SubunitCard>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              <strong>Thomas F. Frist, Jr. College of Medicine</strong><br/>
              Nashville, Tennessee
            </Text>
            <Text style={styles.footerMuted}>
              &copy; 2026 All rights reserved.<br/>
              <Link href="#" style={styles.footerLink}>Unsubscribe</Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// --- Styles ---

const fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

const styles: Record<string, React.CSSProperties> = {
  main: { backgroundColor: '#FAFAFA', fontFamily },
  container: { margin: '0 auto', maxWidth: '600px', backgroundColor: '#FFFFFF', borderRadius: '12px', overflow: 'hidden' },
  header: { padding: '40px 20px 0', textAlign: 'center' },
  headerDivider: { borderTop: '4px solid #2874AF', margin: '0' },
  hero: { backgroundColor: '#2874AF', padding: '40px 20px', textAlign: 'center' },
  heroTitle: { color: '#FFFFFF', fontSize: '32px', fontWeight: '800', margin: '0' },
  introSection: { padding: '30px 40px' },
  editionText: { color: '#6AB3E7', fontSize: '13px', textTransform: 'uppercase', fontWeight: '800', margin: '0 0 5px' },
  officeTitle: { color: '#1D4289', fontSize: '22px', fontWeight: '800', lineHeight: '30px', margin: '0 0 20px' },
  officeSubtitle: { fontSize: '18px', color: '#2874AF', fontWeight: '600' },
  paragraph: { color: '#333333', fontSize: '16px', lineHeight: '26px', margin: '0 0 16px' },
  cardSection: { padding: '10px 20px 20px' },
  card: { backgroundColor: '#F5F5F5', padding: '30px', borderRadius: '12px', border: '1px solid #EAEAEA' },
  cardTitle: { color: '#2874AF', fontSize: '24px', fontWeight: '800', margin: '0 0 8px' },
  cardSubtitle: { color: '#6AB3E7', fontSize: '18px', fontWeight: '700', margin: '0 0 15px' },
  cardDivider: { borderTop: '3px solid #6AB3E7', width: '40px', marginLeft: '0', marginBottom: '20px' },
  badge: { color: '#1D4289', fontWeight: '800', backgroundColor: '#E6F0F9', padding: '2px 8px', borderRadius: '6px' },
  button: { backgroundColor: '#1D4289', color: '#FFFFFF', padding: '14px 28px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' },
  footer: { backgroundColor: '#3D3D3D', padding: '40px 20px', textAlign: 'center' },
  footerText: { color: '#FFFFFF', fontSize: '14px' },
  footerMuted: { color: '#888888', fontSize: '12px', marginTop: '25px' },
  footerLink: { color: '#6AB3E7', textDecoration: 'none' },
};
