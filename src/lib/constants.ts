import community1 from '@/images/community/max-bentley.jpg'
import community2 from '@/images/community/ethan-chambers.jpg'
import community3 from '@/images/community/barry-allenjpg.jpg'
import community4 from '@/images/community/sarah-johnson.jpg'
import community5 from '@/images/community/mark-thompson.jpg'
import community6 from '@/images/community/jessica-moore.jpg'
import community7 from '@/images/community/matthew-taylor.jpg'
import community8 from '@/images/community/emily-thompson.jpg'
import community9 from '@/images/community/john-smith.jpg'
import { StaticImageData } from 'next/image'

interface NavLink {
  label: string
  href: string
}

export const navlinks: NavLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Download', href: '/#download' },
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
