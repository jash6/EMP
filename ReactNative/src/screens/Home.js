import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {getDetails, deleteDetail} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import ListItem from '../components/ListItem';

export default function Home(props) {
  const dispatch = useDispatch();
  const {navigation} = props;
  const {details} = useSelector(state => state.detailReducer);

  useEffect(() => {
    dispatch(getDetails());
  }, [details, onDelete]);

  const onEdit = item => {
    navigation.navigate('Detail', {quote: item, title: 'Edit'});
  };
  const onDelete = item => {
    dispatch(deleteDetail(item.Email));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={details}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ListItem item={item} onEdit={onEdit} onDelete={onDelete} />
        )}
      />
      <TouchableHighlight
        style={styles.floatingButton}
        underlayColor="#ff7043"
        onPress={() => navigation.navigate('Detail', {title: 'New Entry'})}>
        <Text style={{fontSize: 25, color: 'white'}}>+</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  floatingButton: {
    backgroundColor: '#6B9EFA',
    borderColor: '#6B9EFA',
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    right: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
});
