import community1 from '@/images/community/max-bentley.jpg'
import community2 from '@/images/community/ethan-chambers.jpg'
import community3 from '@/images/community/barry-allenjpg.jpg'
import community4 from '@/images/community/sarah-johnson.jpg'
import community5 from '@/images/community/mark-thompson.jpg'
import community6 from '@/images/community/jessica-moore.jpg'
import community7 from '@/images/community/matthew-taylor.jpg'
import community8 from '@/images/community/emily-thompson.jpg'
import community9 from '@/images/community/john-smith.jpg'
import client2 from '@/images/clients/natasha-jackson.webp'
import client3 from '@/images/community/groot.jpg'
import client4 from '@/images/community/mia-khalifa.jpg'
import client5 from '@/images/community/optimus.jpg'
import client6 from '@/images/community/john-cena.jpg'
import { StaticImageData } from 'next/image'

interface NavLink {
  label: string
  href: string
}

export const navlinks: NavLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Download', href: '/#download' },
]

export const socialMediaLinks: NavLink[] = [
  { label: 'X/Twitter', href: 'https://x.com' },
  { label: 'Youtube', href: 'https://www.youtube.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Github', href: 'https://github.com/lehoanghai9' },
]

interface CommunityMember {
  name: string
  image?: StaticImageData
}

export const communityMembers: CommunityMember[] = [
  {
    name: 'Max Bentley',
    image: community1,
  },
  {
    name: 'Ethan Chambers',
    image: community2,
  },
  {
    name: 'Barry Allen',
    image: community3,
  },
  {
    name: 'Sarah Johnson',
    image: community4,
  },
  {
    name: 'Mark Thompson',
    image: community5,
  },
  {
    name: 'YOU',
  },
  {
    name: 'Jessica Moore',
    image: community6,
  },
  {
    name: 'Matthew Taylor',
    image: community7,
  },
  {
    name: 'Emily Thompson',
    image: community8,
  },
  {
    name: 'John Smith',
    image: community9,
  },
]

export interface Testimonial {
  author: string
  image: StaticImageData
  comment: string
}

export const testimonials: Testimonial[] = [
  {
    author: 'John Cena',
    comment:
      '“I had no idea how much fun checking weather can be. Also, it has lots of valuable insights and guidance in it.”',
    image: client6,
  },
  {
    author: 'Nathasha Jackson',
    comment:
      '“I had no idea how much fun checking weather can be. Also, it has lots of valuable insights and guidance in it.”',
    image: client2,
  },
  {
    author: 'Optimus Prime',
    comment:
      '“This app has transformed my morning routine. I love knowing what to expect each day!”',
    image: client5,
  },
  {
    author: 'Michael Smith',
    comment: '“Accurate and reliable. It’s my go-to app for weather updates.”',
    image: community2,
  },
  {
    author: 'Sam Lee',
    comment: '“Beautiful design and very user-friendly. Highly recommended!”',
    image: community3,
  },
  {
    author: 'Mia Khalifa',
    comment:
      '“I appreciate the detailed forecasts and the ability to plan my week accordingly.”',
    image: client4,
  },
  {
    author: 'Groot',
    comment: '“I am groot.”',
    image: client3,
  },
]

export interface FrequentyAskedQuestion {
  question: string
  answer: string
}

export const faqs: FrequentyAskedQuestion[] = [
  {
    question: 'Is the weather app available for both iOS and Android devices?',
    answer:
      'Absolutely! Our weather app is compatible with both iOS and Android devices, ensuring seamless access to accurate weather forecasts wherever you go. Simply download it from the App Store or Google Play Store to get started.',
  },
  {
    question: 'How often are weather updates provided within the app?',
    answer:
      'Weather updates are provided regularly within the app, with frequency varying based on factors such as location, weather conditions, and user preferences. You can expect to receive timely updates to ensure you stay informed about any changes in the forecast.',
  },
  {
    question: 'Is the weather app available in multiple languages?',
    answer:
      'Yes, our weather app supports multiple languages, ensuring accessibility for users worldwide. You can easily switch between languages within the app settings to customize your experience based on your preferences.',
  },
  {
    question:
      'Is your weather app accessible to users with visual impairments?',
    answer:
      'Yes, our weather app is designed with accessibility in mind, featuring compatibility with screen readers and support for alternative text for images. We strive to ensure that users with visual impairments can access all app features and information effectively.',
  },
]
