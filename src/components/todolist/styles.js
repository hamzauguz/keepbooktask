import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',

    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    alignItems: 'center',
  },
  space: {
    justifyContent: 'space-between',
  },
  name: {width: '60%', fontSize: 20},
  desc: {width: '60%', fontSize: 17},
  complete: {fontSize: 16, width: '75%'},
  rightPlace: {
    width: '25%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageW: {
    width: '100%',
  },
});
