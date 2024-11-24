import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('https://www.toolant.net'),
    },
    {
      text: 'Schlüsselfertige Lösung',
      links: [
        {
          text: 'Hartkunststoff-Recyclinganlagen',
          href: getPermalink('/rigid-plastic-recycling-line'),
        },
        {
          text: 'PET-Flaschen-Recycling-Waschanlage',
          href: getPermalink('/'),
        },
        {
          text: 'Kunststoff-Granulieranlage',
          href: getPermalink('/'),
        },
        {
          text: 'PE/PP-Folienwaschanlage',
          href: getPermalink('/'),
        },
        {
          text: 'Hausmüll-Sortieranlage ',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: 'Recyclingmaschinen',
      links: [
        {
          text: 'Schwimm-Sink-Becken',
          href: getPermalink('/products/schwimm-sink-becken'),
        },
        {
          text: 'Einwellen-Shredder mit Schwenkarm',
          href: getPermalink('/products/einwellen-shredder-mit-schwenkarm'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Kontakt',
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
        { text: 'Merkmale', href: '#' },
        { text: 'Preisgestaltung', href: '#' },
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
        { text: 'Professional Services', href: '#' },
        { text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Firma',
      links: [
        { text: 'Über uns', href: getPermalink('/about') },
        { text: 'Blog', href: '#' },
        { text: 'Kontakt', href: getPermalink('/contact') },
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