import * as React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Button,
  Img,
  Hr,
  Link,
} from '@react-email/components';

// --- Types ---

interface SubunitCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  children: React.ReactNode;
}

// --- Reusable Components ---

const SubunitCard: React.FC<SubunitCardProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonHref, 
  children 
}) => (
  <Section style={styles.cardSection}>
    <Section style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
      <Hr style={styles.cardDivider} />
      
      {children}
      
      <Button 
        href={buttonHref} 
        style={styles.button} 
        className="btn-hover"
      >
        {buttonText}
      </Button>
    </Section>
  </Section>
);

// --- Main Email Template ---

interface UpdateProps {
  isEmail?: boolean;
}

export default function AcademicAffairsUpdate({ isEmail = false }: UpdateProps = {}) {
  const sealSrc = isEmail ? 'cid:belmont-seal' : '/static/thomasffrist_seal.png';
  const thumbSrc = isEmail ? 'cid:dr-stephens-thumbnail' : '/static/dr-stephens-thumbnail.jpg';

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
        <Section style={styles.container}>
          
          {/* Header */}
          <Section style={styles.header}>
            <Img 
              src={sealSrc} 
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
            buttonText="See How We Assess Learning"
            buttonHref="https://www.belmont.edu/medicine/medical-education/assessment.html"
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

          {/* Card 2: Curriculum */}
          <SubunitCard 
            title="Curriculum" 
            subtitle="Enhancing the Learning Experience"
            buttonText="Visit the Curriculum Page"
            buttonHref="https://www.belmont.edu/medicine/medical-education/curriculum.html"
          >
            <Text style={styles.paragraph}>
              Our team is continually refining the academic experience to ensure our students and faculty have the resources and spaces they need to succeed locally and in the clinical environment.
            </Text>
            <ul>
              <li><strong>Optimized Learning Environments:</strong> We have installed new classroom clocks to better support faculty pacing and student time-management during instructional sessions.</li>
              <li><strong>Dedicated MS2 Study Hubs:</strong> To support the intense preparation required during "Dedicated" study time, we have secured designated, distraction-free study spaces specifically for MS2s on the 2nd, 5th, and 6th floors.</li>
              <li><strong>Clerkship Curriculum Expansion:</strong> We are thrilled to roll out the new clerkship curriculum, with our teams working diligently behind the scenes to finalize upcoming clinical details and placements.</li>
              <li><strong>Continuous Quality Review:</strong> Faculty and educational staff are actively assessing the current programming—identifying curricular gaps and minimizing redundancies—to build a more cohesive core curriculum.</li>
            </ul>
          </SubunitCard>

          {/* Card 3: Scholarly Productivity & Innovation */}
          <SubunitCard 
            title="Scholarly Productivity & Innovation" 
            subtitle="Supporting Your Research Journey"
            buttonText="Contact SP&I for Mentorship"
            buttonHref="https://www.belmont.edu/medicine/medical-education/scholarly-productivity.html"
          >
            <Text style={styles.paragraph}>
              As your Scholarly Productivity Team, our mission is to support all students in navigating research, scholarly activities, and academic development — and to help you build a competitive residency application along the way. Whether you’re hoping to get involved in research, publish a paper, find a mentor in your specialty of interest, or understand what “scholarship” actually looks like across fields (inside and outside of Belmont), we’re here to support you.
            </Text>
            <Text style={styles.paragraph}>
              Research can take many forms — from basic science to applied clinical studies, and from descriptive and correlative designs to experimental and analytical methods. Understanding where your interests fit and how to communicate them is just as important as the project itself. We’ll teach you how to identify opportunities, refine your goals, and find the right tools and people to support your work.
            </Text>
            <Text style={styles.sectionHeading}>Expect monthly features including:</Text>
            <ul>
              <li>Interviews with residency directors, physicians, and physician-scientists</li>
              <li>Spotlights on current research projects by Belmont students and faculty</li>
              <li>Tips and deadlines for applying to research programs and conferences</li>
              <li>Resources for posters, manuscript writing, IRB submissions, and more</li>
            </ul>
          </SubunitCard>

          {/* Card 4: Residency Director Spotlight */}
          <SubunitCard 
            title="Residency Director Spotlight" 
            subtitle="Insights from Vanderbilt Orthopaedic Surgery"
            buttonText="Watch the Full Interview"
            buttonHref="https://youtu.be/JddHrAZxMfs"
          >
            <Text style={styles.paragraph}>
              In this month’s featured interview, we sat down with Dr. Byron Stephens, Residency Director of Orthopaedic Surgery at Vanderbilt, to discuss how applicants can stand out in one of the most competitive specialties in medicine. Here are his insights on what programs are truly looking for:
            </Text>
            <ul>
              <li><strong>Away rotations and letters of recommendation</strong> are now among the most influential parts of an application. “In the absence of objective metrics like Step 1 scores, your rotation is your audition. It’s your chance to show you belong,” says Dr. Stephens.</li>
              <li>He also emphasized the <strong>value of research</strong>, not as a numbers game, but as a reflection of effort and curiosity. “Don’t worry about chasing a publication count. Know your project well, be able to explain it clearly, and show that it meant something to you.”</li>
              <li>Dr. Stephens shared his own journey from neurosurgery research to a career in orthopaedics, the role mentors played in shaping his path, and why he advises students to fully commit to one specialty (not dual apply) and to trust that authenticity, preparation, and persistence will pay off.</li>
            </ul>
            <Section style={{ textAlign: 'center', margin: '16px 0' }}>
              <Link href="https://youtu.be/JddHrAZxMfs" style={{ display: 'inline-block', width: '100%', maxWidth: '500px', textDecoration: 'none' }}>
                <Img 
                  src={thumbSrc} 
                  alt="Dr. Byron Stephens Interview" 
                  style={{ width: '100%', borderRadius: '8px', display: 'block', margin: '0 auto' }} 
                />
              </Link>
            </Section>
            <Text style={{ ...styles.paragraph, fontSize: '14px', fontStyle: 'italic', color: '#555555' }}>
              <strong>Byron Stephens, M.D, MSCI</strong> is a spine surgeon and Vice Chair of Education in the Department of Orthopaedic Surgery at Vanderbilt. A native of Nashville, Dr. Stephens earned his M.D. at the University of Tennessee, completed his residency in Orthopaedics at Campbell Clinic Ortho, and completed his spine fellowship at Emory University. He later pursued a Master of Science in Clinical Investigation to deepen his research expertise. Today, he leads one of the nation’s top residency programs and remains deeply committed to mentoring the next generation of orthopaedic surgeons.
            </Text>
          </SubunitCard>

          {/* Card 5: Accreditation & CQI */}
          <SubunitCard 
            title="Accreditation & CQI" 
            subtitle="A Culture of Continuous Improvement"
            buttonText="Visit the External Accreditation Page"
            buttonHref="https://www.belmont.edu/medicine/accreditation/cqi.html"
          >
            <Text style={styles.paragraph}>
              The Accreditation and CQI Unit recently completed the LCME provisional accreditation site visit and is now anticipating the final report in July 2026. Although the visit has concluded, the preliminary findings identified several areas for improvement that the school is actively addressing.
            </Text>
            <Text style={styles.paragraph}>
              The Continuous Quality Improvement (CQI) Task Force is monitoring these elements monthly, in addition to maintaining the standard monitoring cadence for all LCME elements. A key component of the CQI process is the engagement of all stakeholders—students, faculty, and staff—in quality improvement efforts.
            </Text>
            
            <Text style={styles.sectionHeading}>Next Steps</Text>
            <Text style={styles.paragraph}>
              To support this involvement, the CQI Task Force has developed a CQI Issues Form for submitting concerns or questions related to LCME elements. The <Link href="https://www.belmont.edu/medicine/accreditation/cqi.html" style={styles.inlineLink}>FCoM Accreditation and Continuous Quality Improvement</Link> website also includes a list of Task Force members, as well as all LCME elements the school is required to monitor.
            </Text>
            <Text style={styles.paragraph}>
              If you have any questions or concerns related to LCME elements, please use the <Link href="https://belmont2edu.sharepoint.com/sites/EXTERNAL-FCoMLCMESteeringCommittee-RuthandHopeAccreditationChannel/_layouts/15/listforms.aspx?cid=NjI2NDA5ZjEtMmNlZi00N2JhLWI1NjQtZThhNDY5N2Y1MDdl&nav=ZWJkZGE4ZWYtNDAzNC00NGFhLWI2Y2UtN2VlN2VjZDQwNTZl" style={styles.inlineLink}>CQI Issues Form</Link> to submit them. Ms. Hope Terhaar, Director of Accreditation, will follow up with you directly.
            </Text>
          </SubunitCard>

          {/* Footer */}
          <Section style={styles.footer}>
            <Img 
              src={sealSrc} 
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
              <Link href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=ew39FqVjrk-fZKmKxAGdfWTnHhXpjpVOn-z6R6A_L9pUNUY0VTBaU1owQUczVElOWjhUME83TDBaVy4u" style={styles.footerLink}>Unsubscribe</Link> | <Link href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=ew39FqVjrk-fZKmKxAGdfWTnHhXpjpVOn-z6R6A_L9pUMkpPREdGMTgyUkYxVTNGWDBFOVVXSVEwSi4u" style={styles.footerLink}>Feedback/Requests</Link>
            </Text>
          </Section>

        </Section>
      </Body>
    </Html>
  );
}

// --- Style Dictionary ---

const fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const styles: Record<string, React.CSSProperties> = {
  main: {
    backgroundColor: '#FAFAFA',
    fontFamily,
  },
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth: 'none',
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
    fontWeight: 800,
    letterSpacing: '1.5px',
    margin: '0 0 5px',
  },
  officeTitle: {
    color: '#1D4289',
    fontSize: '22px',
    fontWeight: 800,
    lineHeight: '30px',
    margin: '0 0 20px',
  },
  officeSubtitle: {
    fontSize: '18px',
    color: '#2874AF',
    fontWeight: 600,
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
    fontWeight: 800,
    margin: '0 0 8px',
    letterSpacing: '-0.3px',
  },
  cardSubtitle: {
    color: '#6AB3E7',
    fontSize: '18px',
    fontWeight: 700,
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
    fontWeight: 800,
    margin: '24px 0 12px',
  },
  badge: {
    color: '#1D4289',
    fontWeight: 800,
    backgroundColor: '#E6F0F9',
    padding: '2px 8px',
    borderRadius: '6px',
    fontSize: '15px',
  },
  button: {
    backgroundColor: '#1D4289',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    textAlign: 'center',
    padding: '14px 28px',
    borderRadius: '8px',
    display: 'inline-block',
    marginTop: '20px',
  },
  inlineLink: {
    color: '#2874AF',
    textDecoration: 'underline',
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