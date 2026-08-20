export const site = {
  name: "Dr. Dhanil Charly",
  title: "Dr. Dhanil Charly — Orthopaedic Surgeon, Thrissur",
  description:
    "Dr. Dhanil Charly (MBBS, DNB Ortho, MNAMS, Fellowship in Arthroscopy) is a consultant sports surgeon in Thrissur specialising in shoulder & knee arthroscopy, sports injuries, regenerative orthopaedics and complex trauma.",
  url: "https://drdhanilcharly.com",
  phoneDisplay: "+91 80788 90229",
  phoneHref: "tel:+918078890229",
  whatsapp: "https://wa.me/918078890229",
  email: "info@drdhanilcharly.com",
  address: {
    lines: [
      "Aswini Hospital Limited",
      "Aswini Junction, Karunakaran Nambiar Rd",
      "Sastha Nagar, Patturaikkal",
      "Thrissur, Kerala 680020",
    ],
    short: "Aswini Hospital, Thrissur",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Aswini+Hospital+Limited+Thrissur",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 5:30 PM" },
    { days: "Sunday", time: "10:00 AM – 1:00 PM" },
  ],
} as const;

export const doctor = {
  name: "Dr. Dhanil Charly",
  credentials: "MBBS · DNB (Ortho) · MNAMS · Fellowship in Arthroscopy",
  roles: [
    "Consultant Sports Surgeon",
    "Arthroscopist",
    "Shoulder & Knee Expert",
    "Regenerative Joint Specialist",
    "Complex Trauma Surgeon",
  ],
  about: [
    "Dr. Dhanil Charly is a fellowship-trained orthopaedic surgeon dedicated to helping people move and live without pain. As a consultant at Aswini Hospital, Thrissur, he combines advanced arthroscopic technique with genuinely personal care — listening first, explaining clearly, and treating only what needs treating.",
    "His practice focuses on the shoulder and knee: from keyhole repairs of ACL, PCL and rotator cuff injuries to regenerative treatments like PRP and cartilage restoration, alongside complete sports-injury rehabilitation and complex trauma surgery.",
  ],
} as const;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Specialties", href: "/#specialties" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
] as const;

export const marqueeItems = [
  "Shoulder Arthroscopy",
  "Knee Arthroscopy",
  "ACL Reconstruction",
  "Rotator Cuff Repair",
  "PRP Therapy",
  "Sports Injury Care",
  "Joint Preservation",
  "Cartilage Restoration",
  "Bankart Repair",
  "Complex Trauma",
] as const;

export type Service = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
};

export const services: Service[] = [
  {
    tag: "Pain Relief",
    title: "Shoulder & Knee Pain Management",
    description:
      "Say goodbye to persistent pain with comprehensive, personalised pain-management plans built around your life and goals.",
    image: "/images/service-pain-management.webp",
    imageAlt: "Careful examination of a patient's knee joint",
  },
  {
    tag: "Keyhole Surgery",
    title: "Comprehensive Arthroscopic Joint Care",
    description:
      "Top-quality care for every joint — from ACL and PCL reconstruction to rotator cuff repair, all through minimally invasive keyhole techniques.",
    image: "/images/service-arthroscopic-care.webp",
    imageAlt: "Arthroscopic inspection of a knee joint",
  },
  {
    tag: "Sports Surgery",
    title: "Expert Shoulder & Knee Arthroscopy",
    description:
      "Precision arthroscopy aimed at one goal: restoring your mobility and getting you back to an active lifestyle as soon as possible.",
    image: "/images/service-shoulder-knee-arthroscopy.webp",
    imageAlt: "Shoulder and knee arthroscopy procedure",
  },
  {
    tag: "Personalised",
    title: "Personalised Joint Pain Care",
    description:
      "One-on-one evaluation and tailored treatment programs designed around your condition, schedule and recovery targets.",
    image: "/images/service-personalized-care.webp",
    imageAlt: "Doctor consulting a patient about joint pain",
  },
  {
    tag: "Regenerative",
    title: "Regenerative Orthopaedics & Joint Preservation",
    description:
      "PRP and stem-cell therapies plus cartilage restoration procedures that help damaged joints heal — and delay or avoid surgery altogether.",
    image: "/images/service-regenerative.webp",
    imageAlt: "Regenerative PRP therapy for joint preservation",
  },
  {
    tag: "Athletes",
    title: "Sports Injury Management & Rehabilitation",
    description:
      "Complete care for athletes and active individuals — diagnosis, treatment and structured rehabilitation under one roof.",
    image: "/images/service-sports-injury.webp",
    imageAlt: "Sports injury rehabilitation session",
  },
];

export type Testimonial = {
  name: string;
  quote: string;
  avatar: string | null;
};

export const testimonials: Testimonial[] = [
  {
    name: "Abhilash K T",
    avatar: "/images/avatar-abhilash.webp",
    quote:
      "The doctor's expertise and kindness made for a truly exceptional visit. He took time to listen to my concerns and answered all my questions. He is truly the best in his field!",
  },
  {
    name: "Rahul Savariya",
    avatar: "/images/avatar-rahul.webp",
    quote:
      "Dr. Dhanil Charly sir is a very gentle and caring doctor. His treatment was very effective and the staff were also very friendly. Highly recommended!",
  },
  {
    name: "Naveen Thomas",
    avatar: null,
    quote:
      "Dr. Dhanil has completely changed my outlook on my health! He takes the time to explain everything in detail. I am feeling so much better now. Thank you, doctor!",
  },
];

export const heroHighlights = [
  { label: "Shoulder Arthroscopy", sub: "Keyhole repair & Bankart" },
  { label: "ACL Reconstruction", sub: "Return to sport, stronger" },
  { label: "PRP Therapy", sub: "Regenerative healing" },
] as const;

/* --- Speciality page (drdhanilcharly.com/speciality/) --- */

export type Expertise = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const expertiseAreas: Expertise[] = [
  {
    title: "Shoulder Arthroscopy Expert",
    description:
      "Specialized in dislocation, rotator cuff tears, AC joint injuries, Bankart lesions & complex shoulder pathologies.",
    image: "/images/speciality-shoulder.webp",
    imageAlt: "Shoulder arthroscopy procedure",
  },
  {
    title: "Knee Arthroscopy Specialist",
    description:
      "Advanced ACL, PCL, MCL, LCL stabilization, meniscus repair & cartilage preservation techniques.",
    image: "/images/speciality-knee.webp",
    imageAlt: "Knee arthroscopy surgery in the operating theatre",
  },
  {
    title: "Arthroscopic Surgeon & Sports Injury Specialist",
    description:
      "Expert in minimally invasive surgery and comprehensive sports injury care.",
    image: "/images/speciality-sports.webp",
    imageAlt: "Sports injury arthroscopic care",
  },
  {
    title: "Shoulder & Elbow Trauma Surgeon",
    description:
      "Focused on complex humerus, scapula, clavicle and elbow fracture-dislocation management.",
    image: "/images/speciality-trauma.webp",
    imageAlt: "Shoulder and elbow trauma care",
  },
  {
    title: "Regenerative Orthopedics & Joint Preservation",
    description:
      "Cutting-edge regenerative therapies including PRP, stem-cell injections and cartilage restoration — non-surgical solutions for early arthritis and joint degeneration that promote natural healing and long-term joint health.",
    image: "/images/speciality-regenerative.webp",
    imageAlt: "Regenerative orthopaedics and joint preservation",
  },
];

/* --- Shoulder Dislocation / Bankart's lesion page --- */

export const dislocation = {
  eyebrow: "Speciality focus",
  heading: "Shoulder Dislocation & Bankart's Lesion",
  intro:
    "Shoulder injuries can be complex, but understanding your condition starts with accurate diagnosis. We specialize in precise imaging and expert evaluation to help you clearly identify the difference between a dislocated shoulder and a normal shoulder on X-ray.",
  reasons: [
    {
      title: "Expert Diagnosis",
      description:
        "Detailed analysis of shoulder X-rays to accurately determine the extent of injury.",
    },
    {
      title: "Advanced Imaging Techniques",
      description:
        "State-of-the-art X-rays and minimally invasive arthroscopic procedures for precise evaluation.",
    },
    {
      title: "Comprehensive Care",
      description:
        "From initial assessment to recovery plans — a holistic approach to shoulder health.",
    },
  ],
  note:
    "Whether you're dealing with pain from an anterior or posterior dislocation, or just want to understand your X-ray results, expert care ensures you receive the best treatment possible.",
  steps: [
    {
      title: "Consultation & Imaging",
      description: "Book a consultation for a full evaluation and imaging of your shoulder.",
    },
    {
      title: "Diagnosis by Experts",
      description:
        "Receive a detailed report comparing dislocated vs normal X-rays of your shoulder.",
    },
    {
      title: "Personalized Treatment Plan",
      description:
        "Explore options like conservative therapy, arthroscopic surgery, or rehabilitation.",
    },
  ],
  images: {
    primary: "/images/dislocation-1.webp",
    primaryAlt: "Rugby player holding his injured shoulder in pain",
    secondary: "/images/dislocation-2.webp",
    secondaryAlt: "Shoulder dislocation examination",
  },
} as const;

/* --- Gallery page (original order) --- */

export type GalleryImage = {
  src: string;
  alt: string;
  tall?: boolean;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-photo-3.webp", alt: "Dr. Dhanil Charly with a patient" },
  { src: "/images/gallery-photo-4.webp", alt: "Orthopaedic consultation at the clinic" },
  { src: "/images/gallery-photo-2.webp", alt: "Clinical evaluation of a knee injury" },
  { src: "/images/gallery-arthroscopic-care.webp", alt: "Comprehensive arthroscopic joint care" },
  { src: "/images/gallery-shoulder-arthroscopy.webp", alt: "Expert shoulder arthroscopy" },
  { src: "/images/gallery-patient-care.webp", alt: "Personalised joint pain care" },
  { src: "/images/gallery-photo-1.webp", alt: "Dr. Dhanil Charly examining a patient" },
  { src: "/images/gallery-about.webp", alt: "About Dr. Dhanil Charly's practice" },
  { src: "/images/gallery-sports-injury.webp", alt: "Sports injury management and rehabilitation" },
  { src: "/images/gallery-regenerative.webp", alt: "Regenerative orthopaedics and PRP therapy" },
];

/* --- Privacy policy --- */

export const privacySections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "Our website address is: https://drdhanilcharly.com.",
    ],
  },
  {
    heading: "Comments",
    paragraphs: [
      "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.",
      "An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available at https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.",
    ],
  },
  {
    heading: "Media",
    paragraphs: [
      "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "If you leave a comment on our site we may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.",
      "If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. Login cookies last for two days, and screen options cookies for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.",
    ],
  },
  {
    heading: "Embedded content from other websites",
    paragraphs: [
      "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor had visited the other website.",
      "These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content — including tracking your interaction if you have an account and are logged in to that website.",
    ],
  },
  {
    heading: "How long we retain your data",
    paragraphs: [
      "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.",
      "For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.",
    ],
  },
  {
    heading: "What rights you have over your data",
    paragraphs: [
      "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.",
    ],
  },
  {
    heading: "Where your data is sent",
    paragraphs: [
      "Visitor comments may be checked through an automated spam detection service.",
    ],
  },
];
