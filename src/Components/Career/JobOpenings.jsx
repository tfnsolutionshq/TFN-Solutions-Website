// src/data/jobOpenings.js

export const jobOpenings = [
    {
        id: 'backend-developer-awka',
        title: 'Backend Developer',
        location: 'On-site (Awka)',
        company: 'TFN Solutions',
        industry: 'Information Technology & Digital Solutions',
        applicationDeadline: 'Jun 15, 2025',
        startDate: 'Immediate',
        engagement: 'Full-time, On-site',
        aboutUs: `TFN Solutions is a forward-thinking technology company delivering scalable digital solutions across software development, cybersecurity, networking, IT consulting, and cloud services. We’re driven by a mission to build technology that empowers people, businesses, and institutions — and we’re currently expanding our development team with a skilled and passionate Backend Developer based in Awka.`,
        responsibilities: [
            'Design, build, and maintain scalable and efficient backend services',
            'Develop and document RESTful APIs for use by mobile and web applications',
            'Integrate third-party services and tools into existing systems',
            'Collaborate with frontend engineers and cross-functional teams to deliver new features',
            'Implement CI/CD pipelines to automate and streamline deployment processes',
            'Maintain high standards of code quality and ensure performance tuning of backend systems',
            'Monitor, troubleshoot, and resolve backend performance issues and production bugs',
        ],
        requirements: [
            'Proficient in Laravel (PHP) and FastAPI (Python)',
            'Strong experience building and consuming RESTful APIs',
            'Familiar with Git, version control workflows, and CI/CD tools (GitHub Actions, GitLab CI, etc.)',
            'Hands-on experience with AWS services such as EC2, S3, Lambda, and RDS',
            'Solid understanding of SQL databases (MySQL, PostgreSQL) and data modeling',
            'Excellent debugging and problem-solving skills',
            'Strong communication and collaboration abilities',
            'Self-driven with a high level of ownership and accountability',
        ],
        howToApply: `To apply, send your CV and a cover letter to hr@tfnsolutions.us`,
        contactEmail: null, // Specific for Sales Manager, null for others
        subjectLine: null, // Specific for Sales Manager, null for others
        note: `Ensure your CV and cover letter are accurately formatted for your application to be considered`, // For Backend Developer and Call Center Rep
    },
    {
        id: 'call-center-representative-awka',
        title: 'Call Center Representative',
        location: 'On-site (Awka, Lagos, Abuja)',
        company: 'TFN Solutions',
        industry: 'Information Technology & Digital Solutions',
        applicationDeadline: 'Jun 15, 2025',
        startDate: 'Immediate', // Assuming immediate if not specified
        engagement: 'Full-time, On-site', // Assuming full-time if not specified
        aboutUs: `TFN Solutions is a forward-thinking technology company delivering scalable digital solutions across software development, cybersecurity, networking, IT consulting, and cloud services. We’re passionate about empowering people and businesses with the technology they need to grow — and we’re looking for empathetic, service-oriented Call Center Representatives to support and delight our users.`,
        responsibilities: [
            'Handle incoming and outgoing customer service calls in a professional and helpful manner',
            'Provide timely, accurate, and complete information to users via phone, email, or chat',
            'Resolve client concerns by understanding the issue and offering effective solutions',
            'Maintain detailed records of all customer interactions and track resolutions',
            'Escalate technical or complex issues to appropriate internal teams',
            'Collaborate with the support, product, and technical teams to enhance user experience',
            'Relay customer feedback and insights to help improve our platforms and services',
        ],
        // Note: The provided text had "Responsibilities" twice for Call Center,
        // I'm assuming the second one was meant to be "Requirements".
        requirements: [
            'Strong verbal communication and active listening skills',
            'Experience in customer support, contact centers, or client-facing roles is a plus',
            'Familiarity with service platforms, web/mobile applications, or IT services',
            'Ability to work well under pressure and manage time effectively',
            'Friendly, patient, and solution-focused approach to customer care',
            'Must be based in or willing to work from Awka, Lagos, or Abuja',
        ],
        howToApply: `To apply, send your CV and a cover letter to hr@tfnsolutions.us`,
        contactEmail: null, // Specific for Sales Manager, null for others
        subjectLine: null, // Specific for Sales Manager, null for others
        note: `Ensure your CV and cover letter are accurately formatted for your application to be considered`, // For Backend Developer and Call Center Rep
    },
    {
        id: 'sales-manager-hybrid',
        title: 'Sales Manager',
        location: 'On-site (Awka)',
        company: 'TFN Solutions',
        industry: 'Information Technology & Digital Solutions',
        applicationDeadline: 'Jun 15, 2025',
        startDate: 'Immediate', // Assuming immediate if not specified
        engagement: 'Full-time, On-site', // Based on location
        aboutUs: `TFN Solutions is a forward-thinking technology company delivering scalable digital solutions across software development, cybersecurity, networking, IT consulting, and cloud services. We're passionate about helping businesses and institutions grow with technology — and now, we’re looking for a results-driven Sales Manager to drive our next phase of growth.`,
        roleSummary: `As a Sales Manager, you will lead and execute strategies to attract new clients, close high-impact deals, and expand our footprint across local and global markets. You’ll work closely with our technical and marketing teams to align solutions with customer needs and build long-term relationships that fuel recurring business.`,
        responsibilities: [
            'Develop and execute sales strategies to meet or exceed revenue targets',
            'Identify and engage new B2B leads in key verticals (education, finance, SMEs, real estate, etc.)',
            'Manage and grow client accounts through consistent communication and service excellence',
            'Prepare compelling proposals, pitches, and presentations',
            'Work closely with project and technical teams to ensure alignment on solution delivery',
            'Lead and train sales reps or business development associates as the team expands',
            'Track KPIs, maintain CRM records, and report progress to executive leadership',
        ],
        requirements: [
            '4+ years of experience in B2B tech, SaaS, or IT solution sales',
            'Proven track record of meeting or exceeding sales targets',
            'Strong understanding of software, IT infrastructure, and tech service offerings',
            'Excellent communication, negotiation, and presentation skills',
            'Self-driven, strategic thinker with strong problem-solving abilities',
            'Familiarity with CRM tools and digital sales platforms',
        ],
        bonusSkills: [
            'Experience in selling to government or educational institutions',
            'Existing network in Nigeria’s tech or business sectors',
            'Previous experience in a startup or growth-stage company',
        ],
        whatWeOffer: [
            'Competitive base salary + performance-based incentives',
            'Opportunity to lead sales strategy in a growing tech firm',
            'Access to cutting-edge digital solutions and internal training',
            'Collaborative, innovation-driven work culture',
            'Hybrid work flexibility',
        ],
        howToApply: `To apply, send your CV and a cover letter to hr@tfnsolutions.us`,
        contactEmail: null, // Specific for Sales Manager, null for others
        subjectLine: null, // Specific for Sales Manager, null for others
        note: `Ensure your CV and cover letter are accurately formatted for your application to be considered`, // For Backend Developer and Call Center Rep
    },
];