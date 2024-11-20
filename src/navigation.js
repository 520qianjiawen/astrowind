import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('https://www.toolant.net'),
    },
    {
      text: 'Complete Solution',
      links: [

        {
          text: 'Rigid Plastic Recycling Lines',
          href: getPermalink('/rigid-plastic-recycling-line'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Recycling Products',
      links: [
        {
          text: 'Sink Float Tank',
          href: getPermalink('/products/sink-float-tank'),
        },
        {
          text: 'Single Shaft Shredder With Arm',
          href: getPermalink('/products/single-shaft-shredder-with-arm'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Recycling Washing Line',
          href: getPermalink('recycling-washing-line', 'category'),
        },
        {
          text: 'Plastic Pelletizing',
          href: getPermalink('plastic-pelletizing', 'post'),
        },
        {
          text: 'Plastic Granulator',
          href: getPermalink('plastic-granulator', 'category'),
        },
        {
          text: 'Recycling Guide',
          href: getPermalink('recycling-guide', 'category'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'E-mail', href: 'mailto:sales@recyclemachine.net', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Recyclinganlage',
      links: [
        { text: 'Merkmale', href: '#' }, //特点
       // { text: 'Security', href: '#' },
       // { text: 'Team', href: '#' },
       //{ text: 'Enterprise', href: '#' },
       // { text: 'Customer stories', href: '#' },
        { text: 'Preisgestaltung', href: '#' }, //价格
        { text: 'Video', href: '#' },
      ],
    },
    {
      title: 'Produkte',
      links: [
        { text: 'Kunststoffwaschlinie', href: '#' },
        { text: 'Granulator', href: '#' },
        { text: 'Schredder', href: '#' },
        { text: 'Kunststoff-Granuliermaschine', href: '#' },
        { text: 'Horizontale Ballenpresse', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
       // { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
       // { text: 'Skills', href: '#' },
       // { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Firma',
      links: [
        { text: 'Über uns', href: '#' },
        { text: 'Blog', href: '#' },
        //{ text: 'Careers', href: '#' },
        //{ text: 'Press', href: '#' },
        //{ text: 'Inclusion', href: '#' },
        { text: 'Kontakt', href: getPermalink('/contact') },
        //{ text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Rumtoo_Machine' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/recycling_machines/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/recycle.machinery/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://toolant.net/"> Rumtoo</a> · All rights reserved.
  `,
};
