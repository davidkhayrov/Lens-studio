export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: 'Portrait' | 'Wedding' | 'Studio' | 'Nature';
  span: 'tall' | 'wide' | 'normal';
};

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/14862030/pexels-photo-14862030.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Striking close-up black and white portrait of a woman with intense expression.',
    category: 'Portrait',
    span: 'tall',
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/37233404/pexels-photo-37233404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stylish woman in black outfit sitting in studio with dramatic lighting.',
    category: 'Studio',
    span: 'wide',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/752787/pexels-photo-752787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A charming outdoor wedding portrait of a smiling bride and groom on a sunny day.',
    category: 'Wedding',
    span: 'normal',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/17757919/pexels-photo-17757919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up black and white portrait of a woman with tousled hair, expressing emotion.',
    category: 'Portrait',
    span: 'tall',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/24604496/pexels-photo-24604496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A serene misty valley surrounded by lush green hills and scattered trees.',
    category: 'Nature',
    span: 'wide',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/5804239/pexels-photo-5804239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A bride and groom sharing an intimate moment by the window, showcasing love and elegance.',
    category: 'Wedding',
    span: 'normal',
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/6705450/pexels-photo-6705450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A thoughtful black and white side profile portrait of a man with dramatic lighting.',
    category: 'Portrait',
    span: 'tall',
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/9668972/pexels-photo-9668972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Woman in orange dress posing in studio with dramatic lighting.',
    category: 'Studio',
    span: 'normal',
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/10124641/pexels-photo-10124641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A mystic forest scene featuring tall trees shrouded in fog, reflected in a still creek.',
    category: 'Nature',
    span: 'wide',
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/38708859/pexels-photo-38708859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Happy couple celebrating their wedding day with smiles and love.',
    category: 'Wedding',
    span: 'normal',
  },
  {
    id: '11',
    src: 'https://images.pexels.com/photos/7699983/pexels-photo-7699983.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A moody black and white portrait of a woman with artistic motion blur effect.',
    category: 'Portrait',
    span: 'tall',
  },
  {
    id: '12',
    src: 'https://images.pexels.com/photos/9145614/pexels-photo-9145614.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A solitary leafless tree reflects on a foggy lake, creating a serene and mysterious landscape.',
    category: 'Nature',
    span: 'wide',
  },
];
