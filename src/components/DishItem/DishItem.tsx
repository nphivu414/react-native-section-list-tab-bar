import * as React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {Dish} from '../../data/mock-data';
import styles from './styles';

type DishItemProps = {
  data: Dish;
};

const DishItem: React.FC<DishItemProps> = ({data}) => {
  const {price, title, description, image} = data;

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.placeInfoContainer}>
          <View style={styles.placeInfo}>
            <Text style={styles.placeTitle}>{title}</Text>
            <Text style={styles.placeSubTitle}>{description}</Text>
            <Text style={styles.priceTitle}>${price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishItem;
