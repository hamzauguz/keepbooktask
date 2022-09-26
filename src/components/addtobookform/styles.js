import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {height: '100%'},
  todoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  textInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 5,
  },
  descInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '90%',
    height: 200,
    borderRadius: 5,
  },
  textInputView: {
    alignItems: 'center',
    height: '90%',
  },
  addTouch: {
    backgroundColor: '#3177AB',
    padding: 10,

    width: '100%',
    height: '10%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    width: '90%',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#B8C4CC',
    flexDirection: 'row',
  },
  buton: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  leftPozition: {
    left: 40,
    color: 'black',
    fontWeight: '400',
    fontSize: 17,
  },
  leftPozitionChoose: {
    left: 30,
    color: 'black',
    fontWeight: '600',
  },
  selectbutonStyle: {
    backgroundColor: '#B8C4CC',
    height: 40,
    margin: 10,
  },
  iconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#B8C4CC',
    margin: 10,
    height: 40,
    borderRadius: 5,
  },
});
