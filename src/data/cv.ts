// Todo o conteúdo do currículo fica aqui, em PT e EN.
// Para atualizar o site, edite só este arquivo.

export type Lang = 'pt' | 'en';

export const contact = {
  name: 'Izabela Neves',
  nameKr: '이자벨라',
  // Único canal de contato público: e-mail e telefone não ficam expostos no site.
  linkedin: 'https://www.linkedin.com/in/izabela-dutra-neves-39347537a',
  city: 'Belo Horizonte, MG',
};

const pt = {
  meta: {
    title: 'Izabela Neves — Comunicação internacional, inglês e coreano',
    description:
      'Currículo de Izabela Neves: inglês fluente (TOEFL 110/120), coreano TOPIK 4, vivência nos EUA e na Coreia do Sul e experiência em marketing digital. Belo Horizonte, MG.',
  },
  nav: { about: 'Perfil', experience: 'Experiência', languages: 'Idiomas', education: 'Formação', contact: 'Contato', switch: 'EN', switchHref: '/en/', print: 'Baixar PDF' },
  hero: {
    eyebrow: 'Relações internacionais · Marketing · Comunicação',
    headline: 'Conectando pessoas, culturas e marcas em três idiomas.',
    intro:
      'Tenho 20 anos, inglês fluente, coreano intermediário-avançado e mais de um ano vivendo nos Estados Unidos e na Coreia do Sul. Estou me preparando para cursar Relações Internacionais no exterior e busco, em Belo Horizonte, uma empresa com atuação internacional para começar a construir minha carreira.',
    ctaPrimary: 'Entrar em contato',
    ctaLinkedin: 'Ver perfil no LinkedIn',
    available: 'Disponível para início imediato',
  },
  stats: [
    { value: '3', label: 'idiomas: português, inglês e coreano' },
    { value: '+1 ano', label: 'vivendo no exterior (EUA e Coreia do Sul)' },
    { value: '110/120', label: 'TOEFL — inglês fluente' },
    { value: 'TOPIK 4', label: 'certificação oficial de coreano' },
  ],
  about: {
    eyebrow: 'Perfil',
    title: 'O que eu levo para a sua equipe',
    text:
      'Procuro uma oportunidade de estágio ou posição de entrada em comércio exterior, marketing internacional, atendimento a clientes e parceiros estrangeiros ou relações institucionais. Quero unir a comunicação em três idiomas, a facilidade de adaptação a outras culturas e a experiência prática em marketing digital para contribuir desde o primeiro dia e aprender com quem já atua no mercado global.',
    pillars: [
      {
        title: 'Comunicação multilíngue',
        text: 'Português nativo, inglês fluente e coreano intermediário-avançado para falar com clientes, parceiros e fornecedores estrangeiros com naturalidade.',
      },
      {
        title: 'Vivência intercultural',
        text: 'Morei, trabalhei e estudei em dois países com culturas muito diferentes — o que desenvolveu autonomia, adaptabilidade e escuta.',
      },
      {
        title: 'Marketing e dados',
        text: 'Experiência real em social media, produção de conteúdo e análise em planilhas, com cursos em marketing internacional e análise de dados.',
      },
    ],
    interestsTitle: 'Áreas de interesse',
    interests: ['Relações internacionais', 'Comércio exterior', 'Marketing internacional', 'Negócios com a Ásia', 'Atendimento a clientes estrangeiros'],
  },
  experience: {
    eyebrow: 'Trajetória',
    title: 'Experiência profissional e internacional',
    items: [
      {
        tag: 'Trabalho',
        role: 'Estagiária de Planejamento de Social Media',
        org: 'Quartel Design',
        place: 'Belo Horizonte, MG',
        period: 'ago 2025 — ago 2026',
        bullets: [
          'Apoiei o planejamento de conteúdo para as redes sociais de clientes, da pauta ao agendamento dos posts no mLabs.',
          'Auxiliei na criação e na produção de fotos e vídeos para as redes sociais.',
          'Montei apresentações de slides para mostrar aos clientes os conteúdos produzidos.',
          'Organizei planilhas no Google Sheets para acompanhar o crescimento dos perfis e controlar o estoque de produtos dos clientes.',
        ],
      },
      {
        tag: 'Intercâmbio',
        role: 'Programa intensivo de língua coreana',
        org: 'Kyung Hee University',
        place: 'Seul, Coreia do Sul',
        period: 'dez 2024 — jun 2025',
        bullets: [
          'Estudei coreano em período integral em uma das universidades mais conhecidas de Seul.',
          'Conquistei a certificação oficial TOPIK nível 4 (de 6).',
          'Vivi o dia a dia da cultura coreana e convivi com estudantes de vários países, desenvolvendo comunicação em ambiente multicultural.',
        ],
      },
      {
        tag: 'Trabalho no exterior',
        role: 'Cuidadora infantil',
        org: 'Casa de família',
        place: 'Estados Unidos',
        period: 'fev — jul 2024 · mai — jun 2026',
        bullets: [
          'Fui responsável pelo cuidado diário de crianças, planejando atividades recreativas e educativas.',
          'Cuidei da rotina e das tarefas da casa com autonomia e responsabilidade.',
          'Usei o inglês em casa e na comunidade, o que consolidou a fluência no idioma.',
        ],
      },
    ],
  },
  languages: {
    eyebrow: 'Idiomas',
    title: 'Três idiomas, com certificação',
    items: [
      { name: 'Português', level: 'Nativo', cert: '', detail: '' },
      { name: 'Inglês', level: 'Fluente', cert: 'TOEFL iBT', detail: '110/120 · nível 5,5 de 6' },
      { name: 'Coreano', level: 'Intermediário-avançado', cert: 'TOPIK II', detail: 'Nível 4 de 6 · estudos na Kyung Hee University' },
    ],
  },
  education: {
    eyebrow: 'Formação',
    title: 'Formação e cursos',
    items: [
      { title: 'Ensino Médio', org: 'Colégio Chromos', detail: 'Formada como Aluna Destaque Acadêmico', year: '2023' },
      { title: 'Programa intensivo de coreano', org: 'Kyung Hee University · Seul', detail: 'Imersão presencial na Coreia do Sul', year: '2024 — 2025' },
    ],
    coursesTitle: 'Cursos online (Coursera)',
    courses: [
      { title: 'Introduction to International Marketing', org: 'Yonsei University' },
      { title: 'Business and Marketing Strategies', org: 'University of London' },
      { title: 'Data Analytics Foundations', org: 'DeepLearning.AI' },
    ],
    next: {
      title: 'Próximo passo',
      text: 'Candidata a vagas de graduação em Relações Internacionais no exterior.',
    },
  },
  skills: {
    eyebrow: 'Competências',
    title: 'Habilidades',
    groups: [
      { title: 'Comunicação', items: ['Comunicação intercultural', 'Atendimento em inglês', 'Apresentações para clientes', 'Escrita para redes sociais'] },
      { title: 'Marketing', items: ['Planejamento de social media', 'Produção de foto e vídeo', 'Marketing internacional', 'Estratégia de negócios'] },
      { title: 'Ferramentas', items: ['Google Sheets', 'mLabs', 'Slides e apresentações', 'Fundamentos de análise de dados'] },
      { title: 'Comportamentais', items: ['Adaptabilidade', 'Autonomia', 'Responsabilidade', 'Organização'] },
    ],
  },
  contactSection: {
    eyebrow: 'Contato',
    title: 'Vamos conversar?',
    text: 'Estou disponível para entrevistas presenciais em Belo Horizonte ou online, em português, inglês ou coreano.',
    linkedinCta: 'Enviar mensagem no LinkedIn',
    linkedinNote: 'O LinkedIn é o melhor canal para falar comigo — por lá combinamos e-mail, telefone e horário da entrevista.',
    city: 'Localização',
  },
  footer: 'Currículo online',
};

const en: typeof pt = {
  meta: {
    title: 'Izabela Neves — International communication, English and Korean',
    description:
      'Résumé of Izabela Neves: fluent English (TOEFL 110/120), Korean TOPIK 4, experience living in the US and South Korea, and hands-on digital marketing. Belo Horizonte, Brazil.',
  },
  nav: { about: 'Profile', experience: 'Experience', languages: 'Languages', education: 'Education', contact: 'Contact', switch: 'PT', switchHref: '/', print: 'Download PDF' },
  hero: {
    eyebrow: 'International relations · Marketing · Communication',
    headline: 'Connecting people, cultures and brands in three languages.',
    intro:
      'I am 20, fluent in English, upper-intermediate in Korean, and have spent more than a year living in the United States and South Korea. While I apply to study International Relations abroad, I am looking for a company with international operations in Belo Horizonte to start building my career.',
    ctaPrimary: 'Get in touch',
    ctaLinkedin: 'View LinkedIn profile',
    available: 'Available to start immediately',
  },
  stats: [
    { value: '3', label: 'languages: Portuguese, English and Korean' },
    { value: '1+ year', label: 'living abroad (US and South Korea)' },
    { value: '110/120', label: 'TOEFL — fluent English' },
    { value: 'TOPIK 4', label: 'official Korean certification' },
  ],
  about: {
    eyebrow: 'Profile',
    title: 'What I bring to your team',
    text:
      'I am looking for an internship or entry-level role in foreign trade, international marketing, support for foreign clients and partners, or institutional relations. I want to combine communication in three languages, ease in adapting to other cultures and hands-on digital marketing experience to contribute from day one — and to learn from people already working in global markets.',
    pillars: [
      {
        title: 'Multilingual communication',
        text: 'Native Portuguese, fluent English and upper-intermediate Korean to talk naturally with foreign clients, partners and suppliers.',
      },
      {
        title: 'Intercultural experience',
        text: 'I have lived, worked and studied in two very different cultures — which built autonomy, adaptability and the habit of listening.',
      },
      {
        title: 'Marketing & data',
        text: 'Real-world experience in social media, content production and spreadsheet analysis, plus courses in international marketing and data analytics.',
      },
    ],
    interestsTitle: 'Areas of interest',
    interests: ['International relations', 'Foreign trade', 'International marketing', 'Business with Asia', 'International client support'],
  },
  experience: {
    eyebrow: 'Background',
    title: 'Professional and international experience',
    items: [
      {
        tag: 'Work',
        role: 'Social Media Planning Intern',
        org: 'Quartel Design',
        place: 'Belo Horizonte, Brazil',
        period: 'Aug 2025 — Aug 2026',
        bullets: [
          'Supported social media content planning for clients, from editorial calendar to scheduling posts in mLabs.',
          'Assisted in creating and producing photos and videos for social media.',
          'Built slide decks to present the content produced to clients.',
          'Organized Google Sheets reports to track profile growth and monitor clients’ product inventory.',
        ],
      },
      {
        tag: 'Study abroad',
        role: 'Intensive Korean Language Program',
        org: 'Kyung Hee University',
        place: 'Seoul, South Korea',
        period: 'Dec 2024 — Jun 2025',
        bullets: [
          'Studied Korean full-time at one of Seoul’s best-known universities.',
          'Earned the official TOPIK level 4 certification (out of 6).',
          'Lived Korean culture day to day alongside students from many countries, building communication skills in a multicultural setting.',
        ],
      },
      {
        tag: 'Work abroad',
        role: 'Childcare Provider',
        org: 'Private household',
        place: 'United States',
        period: 'Feb — Jul 2024 · May — Jun 2026',
        bullets: [
          'Responsible for children’s daily care, planning recreational and educational activities.',
          'Managed the household routine and chores independently and responsibly.',
          'Used English at home and in the community, consolidating my fluency.',
        ],
      },
    ],
  },
  languages: {
    eyebrow: 'Languages',
    title: 'Three languages, certified',
    items: [
      { name: 'Portuguese', level: 'Native', cert: '', detail: '' },
      { name: 'English', level: 'Fluent', cert: 'TOEFL iBT', detail: '110/120 · band 5.5 of 6' },
      { name: 'Korean', level: 'Upper-intermediate', cert: 'TOPIK II', detail: 'Level 4 of 6 · studied at Kyung Hee University' },
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Education and courses',
    items: [
      { title: 'High School', org: 'Colégio Chromos', detail: 'Graduated with Academic Distinction award', year: '2023' },
      { title: 'Intensive Korean Program', org: 'Kyung Hee University · Seoul', detail: 'In-person immersion in South Korea', year: '2024 — 2025' },
    ],
    coursesTitle: 'Online courses (Coursera)',
    courses: [
      { title: 'Introduction to International Marketing', org: 'Yonsei University' },
      { title: 'Business and Marketing Strategies', org: 'University of London' },
      { title: 'Data Analytics Foundations', org: 'DeepLearning.AI' },
    ],
    next: {
      title: 'Next step',
      text: 'Applying to undergraduate programs in International Relations abroad.',
    },
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Skills',
    groups: [
      { title: 'Communication', items: ['Intercultural communication', 'Client support in English', 'Client presentations', 'Social media copywriting'] },
      { title: 'Marketing', items: ['Social media planning', 'Photo and video production', 'International marketing', 'Business strategy'] },
      { title: 'Tools', items: ['Google Sheets', 'mLabs', 'Slide decks', 'Data analytics foundations'] },
      { title: 'Soft skills', items: ['Adaptability', 'Autonomy', 'Accountability', 'Organization'] },
    ],
  },
  contactSection: {
    eyebrow: 'Contact',
    title: 'Let’s talk',
    text: 'Available for interviews in person in Belo Horizonte or online — in Portuguese, English or Korean.',
    linkedinCta: 'Message me on LinkedIn',
    linkedinNote: 'LinkedIn is the best way to reach me — we can exchange email, phone and interview times there.',
    city: 'Location',
  },
  footer: 'Online résumé',
};

export const cv = { pt, en };
