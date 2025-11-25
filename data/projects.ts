export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Tower of Hanoi Solver',
    description:
      'Stuck on a Tower of Hanoi puzzle? This code shows the step-by-step solution for every number of disk.',
    logo: '/logos/python-svgrepo-com.svg',
    link: 'https://github.com/chongsheehonlucas-hue/tower-of-hanoi',
    slug: 'TOH',
  },
  {
    title: 'Digital Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/chongsheehonlucas-hue/lucas-portfolio',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Password Generator',
    description:
      'A simple and efficient way to generate completely random passwords to align with requirements needed.',
    logo: '/logos/lock-security-secure-password-protect-svgrepo-com.svg',
    link: 'https://github.com/chongsheehonlucas-hue/specific-password-generator',
    slug: 'passgen',
  },
  {
    title: 'TP Vending Machine Website',
    description:
      'A project to prototype TP vending machine orders from a website.',
    logo: '/logos/sqlicon.svg',
    link: 'https://github.com/chongsheehonlucas-hue/TP-vendingmachine',
    slug: 'TP-vending',
  },
];
