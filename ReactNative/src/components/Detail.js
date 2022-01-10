import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {Header} from '@react-navigation/stack';

import {postDetail, updateDetail} from '../redux/actions';

const MAX_LENGTH = 100;

export default function Detail({route, navigation}) {
  const dispatch = useDispatch();
  const {quote} = route.params;

  const [fname, setFname] = useState(quote ? quote.First_Name : '');
  const [lname, setLname] = useState(quote ? quote.Last_Name : '');
  const [email, setEmail] = useState(quote ? quote.Email : '');

  let edit = quote ? quote.Email : '';

  const onSave = () => {
    if (quote) {
      dispatch(updateDetail(fname, lname, email));
      navigation.goBack();
    } else {
      dispatch(postDetail(fname, lname, email));
      setFname('');
      setLname('');
      setEmail('');
    }
  };

  let disabled =
    fname.length > 0 && lname.length && email.length > 0 ? false : true;
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Header.HEIGHT}
      style={styles.flex}
      behavior="padding">
      <SafeAreaView style={styles.flex}>
        <View style={styles.flex}>
          <TextInput
            onChangeText={text => setFname(text)}
            placeholder={'First Name'}
            autoFocus={true}
            style={[styles.author]}
            maxLength={MAX_LENGTH}
            value={fname}
          />
          <TextInput
            onChangeText={text => setLname(text)}
            placeholder={'Last Name'}
            style={[styles.author]}
            maxLength={MAX_LENGTH}
            value={lname}
          />
          {edit === '' ? (
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder={'Email'}
              style={[styles.author]}
              maxLength={MAX_LENGTH}
              value={email}
            />
          ) : (
            <></>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableHighlight
              style={[styles.button]}
              disabled={disabled}
              onPress={onSave}
              underlayColor="rgba(0, 0, 0, 0)">
              <Text
                style={[
                  styles.buttonText,
                  {color: disabled ? 'rgba(255,255,255,.5)' : '#FFF'},
                ]}>
                Save
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  buttonContainer: {
    height: 70,
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
  },

  count: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 17,
    color: '#6B9EFA',
  },

  button: {
    width: 80,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B9EFA',
  },

  buttonText: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 16,
  },

  author: {
    fontSize: 20,
    lineHeight: 22,
    fontFamily: 'Helvetica Neue',
    height: 80,
    padding: 16,
    backgroundColor: 'white',
  },

  text: {
    fontSize: 30,
    lineHeight: 33,
    fontFamily: 'Helvetica Neue',
    color: '#333333',
    padding: 16,
    paddingTop: 16,
    minHeight: 170,
    borderTopWidth: 1,
    borderColor: 'rgba(212,211,211, 0.3)',
  },
});
