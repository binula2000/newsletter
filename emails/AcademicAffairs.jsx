import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Button,
  Img,
  Hr,
  Link,
} from '@react-email/components';

// --- Reusable Components ---

const SubunitCard = ({ title, subtitle, buttonText, buttonHref, children }) => (
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
            /* Minor CSS enhancements for clients that support it */
            .btn-hover:hover { background-color: #142d5e !important; }
            ul { padding-left: 20px; margin: 10px 0 20px 0; }
            li { margin-bottom: 12px; }
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
              alt="Thomas F. Frist, Jr. College of Medicine Seal" 
              width="140" 
              style={{ margin: '0 auto', paddingBottom: '20px' }} 
            />
            <Hr style={styles.headerDivider} />
          </Section>

          {/* Hero Section */}
          <Section style={styles.hero}>
            <Text style={styles.heroTitle}>Academic Affairs Monthly</Text>
          </Section>

          {/* Intro Section */}
          <Section style={styles.introSection}>
            <Text style={styles.editionText}>Spring 2026 Edition</Text>
            <Text style={styles.officeTitle}>
              Thomas F. Frist, Jr. College of Medicine<br/>
              <span style={styles.officeSubtitle}>Office of Academic Affairs</span>
            </Text>
            <Text style={styles.paragraph}>
              Welcome to the latest edition of the Academic Affairs Update. As we move through the spring semester, our students and faculty continue to demonstrate incredible dedication to medical education, research, and continuous improvement.
            </Text>
            <Text style={styles.paragraph}>
              In this issue, we are highlighting updates from three key subunits within the Office of Academic Affairs: <strong>Assessment & Evaluation</strong>, <strong>Scholarly Productivity & Innovation</strong>, and <strong>Accreditation & CQI</strong>. Whether you are an MS2 preparing for dedicated board study, a student finalizing summer research plans, or a faculty member engaging in our curriculum enhancement, there are vital updates and resources below to support your journey.
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
              As our MS2s transition into "Dedicated" study, the Assessment & Evaluation team wants to share a clear "counter-narrative" to the inevitable nerves of board prep. The data confirms that you aren't just starting your journey—you’ve already built a massive foundation.
            </Text>
            <Text style={styles.sectionHeading}>The Numbers</Text>
            <Text style={styles.paragraph}>
              Across the MS2 curriculum, the class has collectively tackled the equivalent of nearly four full Step 1 exams:
            </Text>
            <ul>
              <li><span style={styles.badge}>1,074</span> Total NBME-style items completed.</li>
              <li><span style={styles.badge}>83%</span> Collective average performance (first-attempt).</li>
              <li><span style={styles.badge}>15</span> Unique clinical disciplines mastered, from Cardiology to Genetics.</li>
            </ul>
            <Text style={styles.sectionHeading}>The Takeaway</Text>
            <Text style={styles.paragraph}>
              It is common to feel like an "imposter" as Step 1 approaches, but these figures tell a different story. Maintaining an 83% average across more than a thousand rigorous items—excluding retakes or remediations—is a significant achievement.
            </Text>
            <Text style={styles.paragraph}>
              While raw percentages differ from equated national scores, this level of consistency across every major organ system is a powerful indicator of readiness. Trust your training and the work you’ve already put in; the data shows you are exactly where you need to be.
            </Text>
          </SubunitCard>

          {/* Card 2: Scholarly Productivity & Innovation */}
          <SubunitCard 
            title="Scholarly Productivity & Innovation" 
            subtitle="Your Summer of Discovery"
            buttonText="Contact SP&I for Mentorship"
            buttonHref="#"
          >
            <Text style={styles.paragraph}>
              This upcoming 8-week summer window is more than a break from the lecture hall—it is a critical pivot point in your medical journey. This is your opportunity to transition from a consumer of medical knowledge to a contributor to scientific inquiry.
            </Text>
            <Text style={styles.sectionHeading}>Maximize the 8-Week Window</Text>
            <Text style={styles.paragraph}>
              To make the most of this time, approach your research with clarity and intention:
            </Text>
            <ul>
              <li><strong>Establish Expectations:</strong> Meet with your mentor early to define short-term goals, learn necessary techniques, and understand your precise role in the project.</li>
              <li><strong>The "Letter of Rec" Mindset:</strong> Aim to be more than "dependable." Proactivity, intellectual engagement, and reliability are what transform a standard evaluation into a standout letter of recommendation for residency.</li>
              <li><strong>Document the Process:</strong> Keep a running log of your methods, challenges, and findings. This discipline makes drafting future abstracts and manuscripts significantly more efficient.</li>
            </ul>
            <Text style={styles.sectionHeading}>The Clinician-Scientist Foundation</Text>
            <Text style={styles.paragraph}>
              Research isn't just about bolstering a CV; it’s about sharpening the critical thinking skills you will use at the bedside. Use this summer to ask not just how a project works, but why it matters for patient care. Approach these weeks with curiosity and discipline.
            </Text>
          </SubunitCard>

          {/* Card 3: Accreditation & CQI */}
          <SubunitCard 
            title="Accreditation & CQI" 
            subtitle="A Culture of Continuous Improvement"
            buttonText="View the FCoM Accreditation Portal"
            buttonHref="#"
          >
            <Text style={styles.paragraph}>
              The FCoM remains committed to a data-driven, systematic approach to program evaluation and enhancement. Our latest Continuous Quality Improvement (CQI) report (October 2025–February 2026) highlights a proactive framework for monitoring educational quality and ensuring alignment with LCME accreditation standards.
            </Text>
            <Text style={styles.sectionHeading}>Progress by the Numbers</Text>
            <Text style={styles.paragraph}>
              Our commitment to accountability is reflected in the following milestones:
            </Text>
            <ul>
              <li><span style={styles.badge}>15 Elements Resolved</span> Transitioned through successful corrective actions and closure.</li>
              <li><span style={styles.badge}>13 Elements Monitored</span> Intermittent oversight to ensure the long-term effectiveness of recent improvements.</li>
              <li><span style={styles.badge}>100% Completion</span> Work plans for Element 1.2, Element 10.5, and Element 3.4 have been fully implemented.</li>
              <li><span style={styles.badge}>Active Development</span> Substantial progress is underway for Elements 3.2 (Research) and 6.3 (Self-Directed Learning).</li>
            </ul>
            <Text style={styles.sectionHeading}>Strategic Focus & Next Steps</Text>
            <Text style={styles.paragraph}>
              The Curriculum Committee has been highly engaged, with significant voting activity focused on Element 8.3 (Curricular Design) to refine course objectives and mapping. We are also addressing recent LCME findings related to student feedback and advancement processes.
            </Text>
            <Text style={styles.paragraph}>
              Looking ahead, work plans for faculty sufficiency and further curricular revisions are due to the CQI Task Force by May 15, 2026. This structured oversight ensures transparency and fosters a shared responsibility for excellence.
            </Text>
          </SubunitCard>

          {/* Footer */}
          <Section style={styles.footer}>
            <Img 
              src="https://www.belmont.edu/stories/_images/thomasffrist_college_of_medicine_seal.png" 
              alt="Seal" 
              width="60" 
              style={{ margin: '0 auto', opacity: 0.5, paddingBottom: '15px' }} 
            />
            <Text style={styles.footerText}>
              <strong>Thomas F. Frist, Jr. College of Medicine</strong><br/>
              Office of Academic Affairs<br/>
              Nashville, Tennessee
            </Text>
            <Text style={styles.footerMuted}>
              &copy; 2026 Thomas F. Frist, Jr. College of Medicine. All rights reserved.<br/>
              <Link href="#" style={styles.footerLink}>Unsubscribe</Link> | <Link href="#" style={styles.footerLink}>View in Browser</Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// --- Style Dictionary ---

const fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const styles = {
  main: {
    backgroundColor: '#FAFAFA',
    fontFamily,
  },
  container: {
    margin: '0 auto',
    maxWidth: '600px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },
  header: {
    padding: '40px 20px 0',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
  headerDivider: {
    borderTop: '4px solid #2874AF',
    margin: '0',
  },
  hero: {
    backgroundColor: '#2874AF',
    padding: '40px 20px',
    textAlign: 'center',
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: '32px',
    fontWeight: '800',
    margin: '0',
    letterSpacing: '-0.5px',
  },
  introSection: {
    padding: '30px 40px',
    backgroundColor: '#FFFFFF',
  },
  editionText: {
    color: '#6AB3E7',
    fontSize: '13px',
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: '1.5px',
    margin: '0 0 5px',
  },
  officeTitle: {
    color: '#1D4289',
    fontSize: '22px',
    fontWeight: '800',
    lineHeight: '30px',
    margin: '0 0 20px',
  },
  officeSubtitle: {
    fontSize: '18px',
    color: '#2874AF',
    fontWeight: '600',
  },
  paragraph: {
    color: '#333333',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 16px',
  },
  cardSection: {
    padding: '10px 20px 20px',
    backgroundColor: '#FFFFFF',
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #EAEAEA',
  },
  cardTitle: {
    color: '#2874AF',
    fontSize: '24px',
    fontWeight: '800',
    margin: '0 0 8px',
    letterSpacing: '-0.3px',
  },
  cardSubtitle: {
    color: '#6AB3E7',
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 15px',
  },
  cardDivider: {
    borderTop: '3px solid #6AB3E7',
    width: '40px',
    marginLeft: '0',
    marginBottom: '20px',
  },
  sectionHeading: {
    color: '#1D4289',
    fontSize: '16px',
    fontWeight: '800',
    margin: '24px 0 12px',
  },
  badge: {
    color: '#1D4289',
    fontWeight: '800',
    backgroundColor: '#E6F0F9',
    padding: '2px 8px',
    borderRadius: '6px',
    fontSize: '15px',
  },
  button: {
    backgroundColor: '#1D4289',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '700',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '14px 28px',
    borderRadius: '8px',
    display: 'inline-block',
    marginTop: '20px',
    className: 'btn-hover', // targets our inline <style> block
  },
  footer: {
    backgroundColor: '#3D3D3D',
    padding: '40px 20px',
    textAlign: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: '14px',
    lineHeight: '22px',
    margin: '0',
  },
  footerMuted: {
    color: '#888888',
    fontSize: '12px',
    margin: '25px 0 0',
  },
  footerLink: {
    color: '#6AB3E7',
    textDecoration: 'none',
  },
};
