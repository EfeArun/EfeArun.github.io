// Single source of truth for all page content.
// Update fields here — components read from this file.

export const profile = {
  name: 'Umur Efe Arun',
  shortName: 'Efe Arun',
  title: 'M.Sc. Simulation Sciences, RWTH Aachen',
  identity: 'Simulation Sciences · Physics-ML · Digital Twins',
  location: 'Aachen, Germany',
  email: 'efe.arun@gmail.com',
  phone: '+49 176 59866156',
  linkedin: 'https://linkedin.com/in/umur-efe-arun/',
  github: 'https://github.com/EfeArun',
} as const;

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'cv', label: 'CV' },
] as const;

export const heroStatement =
  'I build neural surrogates that turn slow physics simulations into real-time digital twins.';

export const aboutParagraphs = [
  `Simulation Sciences M.Sc. graduate from RWTH Aachen, working at the intersection of physics-based simulation and machine learning. My focus is on neural surrogates — graph networks and physics-informed models — that turn slow FEM and CFD pipelines into real-time digital twins.`,
  `My thesis at the Chair of Model-based Development built a MeshGNN + PINN surrogate delivering a 125× speed-up over conventional FEM, with end-to-end deployment to HoloLens 2 for on-device AR. Before that, classical mechanical engineering: structural FEM at Roketsan and TAI, OpenFOAM cavitation models, parallel solvers in C++ with MPI and OpenMP.`,
  `I care about scientific ML that ships — reproducible data pipelines, faithful physics, and inference fast enough for the interactive loop. Based in Aachen, improving my German, open to roles in computational engineering, ML for science, and digital-twin development.`,
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'C#', 'MATLAB'],
  },
  {
    title: 'Scientific ML',
    skills: ['Graph Neural Networks', 'Physics-Informed NNs', 'Mesh-based Surrogates', 'JAX', 'Algorithmic Differentiation'],
  },
  {
    title: 'Simulation & CAE',
    skills: ['OpenFOAM', 'ANSYS', 'HyperMesh', 'Simulink', 'SolidWorks'],
  },
  {
    title: 'Parallel & HPC',
    skills: ['MPI', 'OpenMP', 'Domain Decomposition'],
  },
  {
    title: 'DevOps & Tooling',
    skills: ['Linux', 'Git', 'Docker', 'Azure'],
  },
  {
    title: 'Spoken Languages',
    skills: ['Turkish (Native)', 'English (Fluent)', 'German (B2)', 'Japanese (Beginner)'],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  metric: string;
  metricLabel?: string;
  stack: string[];
  image: string;
  imageAlt: string;
  github?: string;
  demo?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'meshgnn',
    title: 'Physics-Informed Surrogate for Material Simulation',
    description:
      'M.Sc. thesis (grade 1.0). MeshGNN + PINN surrogate replacing conventional FEM for real-time material simulation. Full pipeline from automated data generation through training to on-device AR deployment on HoloLens 2.',
    metric: '125×',
    metricLabel: 'speed-up vs. FEM',
    stack: ['PyTorch', 'MeshGNN', 'PINN', 'C# / Unity', 'HoloLens 2'],
    image: '/assets/projects/mesh-pinn.svg',
    imageAlt: 'Abstract mesh of nodes and edges representing a graph neural network surrogate.',
    github: '#',
    highlight: true,
  },
  {
    slug: 'parallel-fem',
    title: 'Parallel FEM Heat Diffusion Solver',
    description:
      '2D unsteady FEM solver parallelized with OpenMP and MPI, tuned via compiler flags and scheduling strategy. Diagnosed MPI scaling bottleneck as a domain-partitioning deficiency and proposed graph-based partitioning as the fix.',
    metric: '5.3×',
    metricLabel: 'parallel speed-up',
    stack: ['C++', 'MPI', 'OpenMP', 'FEM'],
    image: '/assets/projects/parallel-fem.svg',
    imageAlt: 'Grid partitioned into colored subdomains representing parallel FEM domain decomposition.',
    github: '#',
  },
  {
    slug: 'shallow-water',
    title: 'Parameter Estimation for Shallow Water Flow',
    description:
      'Forward-mode algorithmic differentiation implemented for a 1D PDE solver to recover bottom-topography parameters. Validated against finite differences and JAX; characterized adaptive vs. fixed time-stepping trade-offs.',
    metric: 'Forward-mode AD',
    metricLabel: '1D PDE inversion',
    stack: ['Python', 'JAX', 'Algorithmic Differentiation'],
    image: '/assets/projects/shallow-water.svg',
    imageAlt: 'Layered sine waves representing 1D shallow water flow over a varying bottom topography.',
    github: '#',
  },
  {
    slug: 'cavitation',
    title: 'Cavitation Modeling for Bearing Lubrication',
    description:
      'Extended OpenFOAM with a novel cavitation model for bearing-system flows and validated against analytical benchmarks. Adopted as a data source for downstream ML-surrogate work in the same research project.',
    metric: 'Powers downstream ML',
    metricLabel: 'Adopted by data pipeline',
    stack: ['OpenFOAM', 'C++', 'CFD'],
    image: '/assets/projects/cavitation.svg',
    imageAlt: 'Scattered circles of varying sizes representing cavitation bubbles in a bearing flow.',
    github: '#',
  },
];

export type EducationEntry = {
  institution: string;
  degree: string;
  grade: string;
  location: string;
  period: string;
  logo: string;
};

export const education: EducationEntry[] = [
  {
    institution: 'RWTH Aachen University',
    degree: 'M.Sc. Simulation Sciences',
    grade: 'Grade: 1.9',
    location: 'Aachen, Germany',
    period: '10.2022 – 09.2025',
    logo: '/assets/logos/rwth.svg',
  },
  {
    institution: 'İhsan Doğramacı Bilkent University',
    degree: 'B.Sc. Mechanical Engineering',
    grade: 'GPA: 3.25 / 4.0',
    location: 'Ankara, Turkey',
    period: '09.2018 – 06.2022',
    logo: '/assets/logos/bilkent.png',
  },
];

export type ExperienceEntry = {
  organization: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  logo: string;
};

export const experience: ExperienceEntry[] = [
  {
    organization: 'RWTH — Chair of Model-based Development (MBD)',
    role: 'Research Assistant — Machine Learning',
    location: 'Aachen, Germany',
    period: '12.2023 – 09.2025',
    bullets: [
      'Developed an ML pipeline accelerating flow simulations using GNN surrogates.',
      'Built a reusable toolkit for physics-based data preparation across scientific-ML applications.',
    ],
    logo: '/assets/logos/rwth.svg',
  },
  {
    organization: 'Roketsan — Senior Design Project, Bilkent University',
    role: 'Project Engineer — Structural Analysis & System Integration',
    location: 'Ankara, Turkey',
    period: '09.2021 – 06.2022',
    bullets: [
      'Performed structural FEM analysis of all gimbal components with ANSYS.',
      'Integrated a target-tracking control system in Simulink and delivered a functional prototype meeting all requirements.',
    ],
    logo: '/assets/logos/roketsan.svg',
  },
  {
    organization: 'Turkish Aerospace Industry (TAI)',
    role: 'Intern — Structural Analysis',
    location: 'Ankara, Turkey',
    period: '06.2021 – 07.2021',
    bullets: [
      'Performed FEM analysis on helicopter cabin components with HyperMesh, deriving design improvements from CAE results.',
    ],
    logo: '/assets/logos/tai.svg',
  },
];

export type Activity = {
  organization: string;
  role?: string;
  period: string;
  location?: string;
  bullets?: string[];
  logo: string;
};

export const activities: Activity[] = [
  {
    organization: 'German Aerospace Society (DGLR)',
    period: 'Member since 02.2026',
    logo: '/assets/logos/dglr.svg',
  },
  {
    organization: 'EUROAVIA Aachen e.V.',
    period: 'Member since 06.2023',
    location: 'Aachen, Germany',
    bullets: [
      'Provided professional development for new members and represented the chapter at international aerospace forums.',
    ],
    logo: '/assets/logos/euroavia.png',
  },
  {
    organization: 'Mechanical Engineering Society, Bilkent University',
    role: 'President',
    period: '06.2021 – 06.2022',
    location: 'Ankara, Turkey',
    bullets: [
      'Led a team of 10 organizing courses and seminars for 100+ members.',
      'Secured sponsorships and mentored student teams at international competitions.',
    ],
    logo: '/assets/logos/mes.png',
  },
];

export const certifications = [
  {
    title: 'Google Project Management Professional Certificate',
    issuer: 'Coursera',
  },
];
