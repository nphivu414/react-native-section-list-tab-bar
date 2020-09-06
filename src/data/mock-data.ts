import {ImageSourcePropType} from 'react-native';

const faker = require('faker');

export type Dish = {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: ImageSourcePropType;
  coverImage?: ImageSourcePropType;
  sideDishes?: DishSection[];
};

export type DishSection = {
  title: string;
  data: Dish[];
};

export type Place = {
  id: string;
  title: string;
  coverImage?: ImageSourcePropType;
  image: ImageSourcePropType;
  subTitle: string;
  distance: number;
  time: number;
  rating: number;
  dishSection?: DishSection[];
};

export const mockPlaceDetails: Place = {
  id: '1',
  title: 'Neapolitan pizza, Italy. Neapolitan pizza',
  coverImage: require('../assets/images/cover.jpg'),
  image: require('../assets/images/banhmi.jpg'),
  subTitle: 'Western, Spaghetti',
  distance: 75,
  time: 90,
  rating: 4,
  dishSection: [
    {
      title: 'Burgers',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('../assets/images/banhmi.jpg'),
        })),
    },
    {
      title: 'Pizza',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('../assets/images/banhmi.jpg'),
        })),
    },
    {
      title: 'Sushi and rolls',
      data: Array(4)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('../assets/images/banhmi.jpg'),
        })),
    },
    {
      title: 'Pasta',
      data: Array(4)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('../assets/images/banhmi.jpg'),
        })),
    },
    {
      title: 'Dessert',
      data: Array(6)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('../assets/images/banhmi.jpg'),
        })),
    },
  ],
};
