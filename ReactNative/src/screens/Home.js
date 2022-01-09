import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {getDetails} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';

export default function Home() {
  const {details} = useSelector(state => state.detailReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails());
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={details}
        renderItem={({item}) => (
          <View>
            <Text>
              {item.First_Name} {item.Last_Name}
            </Text>

            <Text>{item.Email}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
