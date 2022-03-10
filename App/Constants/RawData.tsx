import Icons from '../Assets/icons';
import Images from '../Assets/images';
import {Strings} from './StringData';

const categoiresData = [
  {
    id: 1,
    title: 'Mobile Design',
    icon: Icons.mobile,
  },
  {
    id: 2,
    title: '3D Modeling',
    icon: Icons.model,
  },
  {
    id: 3,
    title: 'Web Designing',
    icon: Icons.web,
  },
  {
    id: 4,
    title: 'illustrations',
    icon: Icons.illustration,
  },
  {
    id: 5,
    title: 'Drawing',
    icon: Icons.drawing,
  },
  {
    id: 6,
    title: 'Animation',
    icon: Icons.animation,
  },
  {
    id: 7,
    title: 'Education',
    icon: Icons.education,
  },
  {
    id: 8,
    title: 'Networking',
    icon: Icons.network,
  },
  {
    id: 9,
    title: 'Coding',
    icon: Icons.coding,
  },
];

const VideoData = [
  {
    id: 1,
    title: 'Canvas design',
    bg: Images.tb1,
    time: '2h 30m',
    author: 'By James Morris',
    price: '$75.00',
    rate: 4.9,
    desc: 'The Ultimate UI/UX Course Beginner to Advance',
    isTrue: false,
  },
  {
    id: 2,
    title: 'Canvas design',
    bg: Images.tb2,
    time: '1h 45m',
    author: 'By James Morris',
    price: '$25.00',
    rate: 4.2,
    desc: 'The Ultimate UI/UX Course Beginner to Advance',
    isTrue: false,
  },
  {
    id: 3,
    title: 'Canvas design',
    bg: Images.tb3,
    time: '2h 45m',
    author: 'By James Morris',
    price: '$55.10',
    rate: 4.1,
    desc: 'The Ultimate UI/UX Course Beginner to Advance',
    isTrue: false,
  },
  {
    id: 4,
    title: 'Canvas design',
    bg: Images.tb4,
    time: '3h 10m',
    author: 'By James Morris',
    price: '$115.00',
    rate: 5.0,
    desc: 'The Ultimate UI/UX Course Beginner to Advance',
    isTrue: false,
  },
];

const CategoryData = [
  {
    id: 1,
    bg: Images.bg1,
    title: 'Mobile Design',
  },
  {
    id: 2,
    bg: Images.bg2,
    title: '3D Modeling',
  },
  {
    id: 3,
    bg: Images.bg3,
    title: 'Web Designing',
  },
  {
    id: 4,
    bg: Images.bg4,
    title: 'Illustration',
  },
  {
    id: 5,
    bg: Images.bg5,
    title: 'Drawing',
  },
  {
    id: 6,
    bg: Images.bg6,
    title: 'Animation',
  },
];

const topsearches = [
  {
    id: 1,
    title: 'Sketch',
  },
  {
    id: 2,
    title: 'Modeling',
  },
  {
    id: 3,
    title: 'UI/UX',
  },
];

const profileData1 = [
  {
    id: 1,
    title: 'Name',
    icon: Icons.profile,
    name: 'ByProgrammers',
  },
  {
    id: 2,
    title: 'Email',
    icon: Icons.email,
    name: 'byprogrammers@gmail.com',
  },
  {
    id: 3,
    title: 'Password',
    icon: Icons.password,
    name: 'Updated 2 weeks ago',
  },
  {
    id: 4,
    title: 'Contact Number',
    icon: Icons.call,
    name: '+602342324',
  },
];

const profileData2 = [
  {
    id: 1,
    title: 'Pages',
    icon: Icons.star1,
  },
  {
    id: 2,
    title: 'New Course Notifications',
    icon: Icons.new,
  },
  {
    id: 3,
    title: 'Study Reminder',
    icon: Icons.reminder,
  },
];

const StudentData = [
  {id: 0, icon: Images.stud1},
  {id: 1, icon: Images.stud2},
  {id: 2, icon: Images.stud3},
  {id: 2, icon: null, title: 'View All'},
];

const FileData = [
  {
    id: 0,
    icon: Images.pdf,
    title: 'UI Fundamentals',
    desc: 'Shared by ByProgrammers',
    date: '13th Sep 2021',
  },
  {
    id: 1,
    icon: Images.doc,
    title: 'UX Checklist',
    desc: 'Shared by ByProgrammers',
    date: '22th Sep 2021',
  },
  {
    id: 2,
    icon: Images.sketch,
    title: 'Sketch File',
    desc: 'Shared by ByProgrammers',
    date: '7th Sep 2021',
  },
];

const DiscussionsData = [
  {
    id: 0,
  },
];

const subCommentData = [
  {
    id: 0,
    cmnt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tile: Strings.byprog,
  },
  {
    id: 1,
    cmnt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tile: Strings.byprog,
  },
  {
    id: 2,
    cmnt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tile: Strings.byprog,
  },
  {
    id: 3,
    cmnt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tile: Strings.byprog,
  },
];

const followerData = [
  {
    id: 0,
    title: 'Followers',
    count: '8.8M',
    color: 'yellow',
  },
  {
    id: 1,
    title: 'Reviews',
    count: '1.8K',
    color: 'pink',
  },
  {
    id: 2,
    title: 'Total Students',
    count: '180M',
    color: 'purple',
  },
];

const ReviewData = [
  {
    id: 0,
    icon: Images.stud1,
    days: '2 days ago',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id leo purus. Cras consequat quam id est mollis lacinia.',
  },
  {
    id: 1,
    icon: Images.stud2,
    days: '7 days ago',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id leo purus. Cras consequat quam id est mollis lacinia.',
  },
  {
    id: 2,
    icon: Images.stud3,
    days: '5 days ago',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id leo purus. Cras consequat quam id est mollis lacinia.',
  },
];

const MembershipCardData = [
  {
    id: 0,
    price: '$99',
    offer: 'Get 7 days free trail',
    month: '/Month',
  },
  {
    id: 1,
    price: '$39',
    offer: '$13/month Billed quarterly',
    month: '/3months',
  },
  {
    id: 2,
    price: '$68',
    offer: '$11.33/month Billed half yearly',
    month: '/6months',
  },
  {
    id: 3,
    price: '$115',
    offer: 'Pay once and dont worry for year',
    month: '/Year',
  },
];

const NotificationData = [
  {
    id: 0,
    icon: Images.stud1,
    name: 'Admin',
    time: '2h 47m ago',
    des: 'Asked to join online courses \nregarding professional web \ndesigning',
  },
  {
    id: 1,
    icon: Images.stud2,
    name: 'Customer Care',
    time: '3h 02m ago',
    des: 'Your 50% discount code is \nON50DIS. Apply on checkout',
  },
  {
    id: 2,
    icon: Images.stud3,
    name: 'Lilian Elis',
    time: '4h 32m ago',
    des: 'Asked assigned you to watch \nprofessional videography course',
  },
];

const NotificationData1 = [
  {
    id: 0,
    icon: Images.stud1,
    name: 'Admin',
    time: '2h 47m ago',
    des: 'Asked to join online courses \nregarding professional web \ndesigning',
  },
  {
    id: 1,
    icon: Images.stud2,
    name: 'Customer Care',
    time: '3h 02m ago',
    des: 'Your 50% discount code is \nON50DIS. Apply on checkout',
  },
  {
    id: 2,
    icon: Images.stud3,
    name: 'Lilian Elis',
    time: '4h 32m ago',
    des: 'Asked assigned you to watch \nprofessional videography course',
  },
];

const ClassTypeData = [
  {
    id: 0,
    icon: Icons.all,
    title: 'All',
  },
  {
    id: 1,
    icon: Icons.staff,
    title: 'Staff Pick',
  },
  {
    id: 2,
    icon: Icons.original,
    title: 'Original',
  },
];

const ClassLevelData = [
  {
    id: 0,
    name: 'Beginner',
  },
  {
    id: 1,
    name: 'Intermediate',
  },
  {
    id: 2,
    name: 'Advanced',
  },
];

const CreateWithData = [
  {
    id: 0,
    title: 'All',
  },
  {
    id: 1,
    title: 'This Month',
  },
  {
    id: 2,
    title: 'This Week',
  },
  {
    id: 3,
    title: 'This Day',
  },
  {
    id: 4,
    title: '2 Months',
  },
  {
    id: 5,
    title: '4 Months',
  },
];

const chapterData = [
  {
    id: 0,
    icon: Icons.completed,
    title: '1. Introduction',
    time: '1.37',
    size: '10 MB',
    downloadStatus: Icons.download,
  },
  {
    id: 1,
    icon: Icons.play,
    title: '2. User Interface',
    time: '1.15:00',
    size: '200 MB',
    downloadStatus: Icons.completed,
  },
  {
    id: 2,
    icon: Icons.lock,
    title: '3. User Experience',
    time: '1.27:00',
    size: '230 MB',
    downloadStatus: Icons.download,
  },
];

const Sliderdata = [
  {
    id: 0,
    img: Images.work,
  },
  {
    id: 1,
    img: Images.work,
  },
  {
    id: 2,
    img: Images.work,
  },
];

const dotsData = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const DataTab = [
  {id: 0, title: 'Chapters', isActive: true},
  {id: 1, title: 'Files', isActive: false},
  {id: 2, title: 'Discussions', isActive: false},
];

const CardsData = [
  {
    id: 0,
    icon: Icons.completed,
    text1: 'I am a',
    text2: 'STUDENT',
  },
  {
    id: 2,
    icon: Icons.completed,
    text1: 'I am a',
    text2: 'TUTOR',
  },
];

export const DummyData =  {
  categoiresData,
  VideoData,
  CategoryData,
  topsearches,
  profileData1,
  profileData2,
  StudentData,
  FileData,
  DiscussionsData,
  subCommentData,
  followerData,
  ReviewData,
  MembershipCardData,
  NotificationData,
  NotificationData1,
  ClassTypeData,
  ClassLevelData,
  CreateWithData,
  chapterData,
  Sliderdata,
  dotsData,
  DataTab,
  CardsData,
};
