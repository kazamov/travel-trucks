import FilterForm from '../components/FilterForm';
import Button from '../components/Button';
import CampersList from '../components/CampersList';

import classes from './CatalogPage.module.css';

const CAMPERS = [
  {
    id: '2',
    name: 'Cruise America C-21',
    price: 8000,
    rating: 4.3,
    location: 'Ukraine, Poltava',
    description:
      'Discover the charm of the open road with the Cruise America C-21, a compact and versatile alcove-style motorhome. Ideal for couples or small families, this motorhome combines practicality with comfort, offering an efficient and enjoyable travel experience. The Cruise America C-21 is designed to provide you with the freedom to explore while ensuring a cozy retreat at the end of the day.',
    form: 'alcove',
    length: '6.4m',
    width: '2.34m',
    height: '3.72m',
    tank: '151l',
    consumption: '21l/100km',
    transmission: 'automatic',
    engine: 'petrol',
    AC: true,
    bathroom: true,
    kitchen: true,
    TV: false,
    radio: true,
    refrigerator: true,
    microwave: true,
    gas: true,
    water: true,
    gallery: [
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/2-1.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/2-1.webp',
      },
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/2-2.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/2-2.webp',
      },
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/2-3.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/2-3.webp',
      },
    ],
    reviews: [
      {
        reviewer_name: 'Alice',
        reviewer_rating: 5,
        comment:
          "The Cruise America C-21 exceeded our expectations! Compact yet spacious, it's perfect for a couple's getaway. The kitchen facilities were impressive, and the bathroom setup was convenient. Highly recommended for a cozy and memorable road trip.",
      },
      {
        reviewer_name: 'Bob',
        reviewer_rating: 3,
        comment:
          'Decent motorhome for the price. The Cruise America C-21 provided a comfortable stay, but the lack of a TV and CD player was a downside for entertainment. Overall, a satisfactory experience for a short trip.',
      },
    ],
  },
  {
    id: '3',
    name: 'Britz 4 Berth',
    price: 9000,
    rating: 4.4,
    location: 'Ukraine, Dnipro',
    description:
      "Experience luxury on the road with the Britz 4 Berth motorhome. Perfect for couples or small families, this alcove-style RV combines style, comfort, and functionality to provide an unforgettable travel experience. Whether you're exploring scenic landscapes or camping under the stars, the Britz 4 Berth offers a home-like atmosphere wherever your adventures take you.",
    form: 'alcove',
    length: '6.4m',
    width: '2.65m',
    height: '3.65m',
    tank: '208l',
    consumption: '30l/100km',
    transmission: 'manual',
    engine: 'petrol',
    AC: true,
    bathroom: true,
    kitchen: true,
    TV: true,
    radio: true,
    refrigerator: true,
    microwave: true,
    gas: false,
    water: true,
    gallery: [
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/3-1.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/3-1.webp',
      },
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/3-2.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/3-2.webp',
      },
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/3-3.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/3-3.webp',
      },
    ],
    reviews: [
      {
        reviewer_name: 'Alice',
        reviewer_rating: 5,
        comment:
          'The Britz 4 Berth is a fantastic choice for a comfortable and stylish road trip. The interior design is impressive, and the amenities provided a luxury touch. Highly recommended for couples seeking a premium RV experience.',
      },
      {
        reviewer_name: 'Bob',
        reviewer_rating: 3,
        comment:
          'Decent motorhome overall. The Britz 4 Berth provided a comfortable stay, but the lack of gas for cooking was a downside. The entertainment options were good, and the bed was comfortable. Worth considering for a short trip.',
      },
    ],
  },
  {
    id: '4',
    name: 'Mighty Class C Large [MT]',
    price: 12000,
    rating: 4.4,
    location: 'Ukraine, Odesa',
    description:
      'Embark on a grand adventure with the Mighty Class C Large [MT], a spacious and powerful alcove-style motorhome designed for larger groups and families. This RV is not just a mode of transportation but a mobile haven with ample space and premium amenities to ensure a comfortable and enjoyable journey through picturesque landscapes and charming destinations.',
    form: 'alcove',
    length: '8.2m',
    width: '3.04m',
    height: '3.65m',
    tank: '208l',
    consumption: '25l/100km',
    transmission: 'automatic',
    engine: 'hybrid',
    AC: true,
    bathroom: true,
    kitchen: true,
    TV: true,
    radio: true,
    refrigerator: true,
    microwave: true,
    gas: true,
    water: true,
    gallery: [
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/4-1.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/4-1.webp',
      },
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/4-2.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/4-2.webp',
      },
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/4-3.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/4-3.webp',
      },
    ],
    reviews: [
      {
        reviewer_name: 'Alice',
        reviewer_rating: 5,
        comment:
          'The Mighty Class C Large [MT] provided an exceptional experience for our family road trip. Spacious interiors, well-equipped kitchen, and comfortable beds made our journey memorable. Highly recommended for larger groups looking for a premium RV.',
      },
      {
        reviewer_name: 'Bob',
        reviewer_rating: 3,
        comment:
          'Decent motorhome, but had some issues with functionality. The kitchen facilities were good, but the gas supply seemed insufficient. Overall, a satisfactory experience for our group.',
      },
    ],
  },
  {
    id: '5',
    name: 'El Monte Class C Small [C]',
    price: 11000,
    rating: 4.4,
    location: 'Ukraine, Odesa',
    description:
      "Experience the perfect blend of compact design and functionality with the El Monte Class C Small [C]. Tailored for small families or groups of four, this motorhome provides a cozy and efficient way to explore the open roads and create lasting memories. Whether you're planning a weekend getaway or an extended road trip, the El Monte Class C Small [C] offers a hassle-free and comfortable travel experience.",
    form: 'alcove',
    length: '6.4m',
    width: '2.54m',
    height: '3.4m',
    tank: '208l',
    consumption: '25l/100km',
    transmission: 'manual',
    engine: 'diesel',
    AC: true,
    bathroom: true,
    kitchen: true,
    TV: true,
    radio: true,
    refrigerator: true,
    microwave: true,
    gas: true,
    water: true,
    gallery: [
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/5-1.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/5-1.webp',
      },
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/5-2.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/5-2.webp',
      },
      {
        thumb: 'https://ftp.goit.study/img/campers-test-task/5-3.webp',
        original: 'https://ftp.goit.study/img/campers-test-task/5-3.webp',
      },
    ],
    reviews: [
      {
        reviewer_name: 'Alice',
        reviewer_rating: 5,
        comment:
          'The El Monte Class C Small [C] was the perfect choice for our family of four. Compact yet surprisingly spacious, it provided all the amenities we needed. The kitchen facilities were excellent, and the overall experience was delightful.',
      },
      {
        reviewer_name: 'Bob',
        reviewer_rating: 3,
        comment:
          'A decent motorhome for a small family. The El Monte Class C Small [C] offered convenience, but the bed setup was a bit cramped. Good for short trips but might need more space for an extended journey.',
      },
    ],
  },
];

function CatalogPage() {
  return (
    <div className={classes['catalog-page']}>
      <div className={classes['filters']}>
        <FilterForm />
      </div>
      <div className={classes['cards']}>
        <CampersList campers={CAMPERS} />
        <Button outlined className={classes['load-more-button']}>
          Load more
        </Button>
      </div>
    </div>
  );
}

export default CatalogPage;
