import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#282828',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  placeInfoContainer: {
    flex: 1,
  },
  placeInfo: {
    marginTop: 0,
  },
  placeTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceTitle: {
    color: '#FC6A57',
    fontWeight: 'bold',
  },
  placeSubTitle: {
    color: 'white',
    marginTop: 5,
    marginBottom: 10,
  },
});
