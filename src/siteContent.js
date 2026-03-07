const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const asset = (name) => `${baseUrl}images/coffee/${name}`;

export const stats = [
  { value: '08', label: 'seasonal drinks rotating across the week' },
  { value: '03', label: 'brew methods tuned for texture and clarity' },
  { value: '07', label: 'sunlit seats built for slow conversations' },
];

export const drinks = [
  {
    name: 'Cloud Flat White',
    profile: 'Silky texture, panela sweetness, citrus finish.',
    detail:
      'Dialed on bright Colombian espresso and finished with a soft tulip pour.',
    image: asset('flat-white.png'),
    alt: 'Low depth of field close-up of a flat white with latte art on a light countertop.',
  },
  {
    name: 'Glass Pour-Over',
    profile: 'Washed Ethiopian notes, jasmine lift, precise body.',
    detail:
      'Hand-poured to keep the cup transparent, layered, and quietly floral.',
    image: asset('pour-over.png'),
    alt: 'Shallow depth of field photo of a craft pour-over coffee being brewed into a glass server.',
  },
  {
    name: 'Citrus Iced Espresso',
    profile: 'Sparkling orange brightness, cocoa finish, cold lift.',
    detail:
      'Built for daylight with a clean chill, condensed glass, and a snappy finish.',
    image: asset('iced-espresso.png'),
    alt: 'Low depth of field close-up of an iced signature espresso drink in a clear glass.',
  },
];

export const rituals = [
  'Morning bar light, bright surfaces, and calm service pacing.',
  'Baristas focused on extraction, milk texture, and clean presentation.',
  'Tables designed for conversation, laptop hours, and second cups.',
];

export const hero = {
  image: asset('hero-lifestyle.png'),
  alt: 'Two people enjoying coffee in a bright modern coffee shop with a shallow depth of field.',
};

export const story = {
  image: asset('community-pour.png'),
  alt: 'A barista handing a craft coffee to a smiling guest in a modern bright cafe, photographed with shallow depth of field.',
};
