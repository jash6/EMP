import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

export default function ListItem({item, onEdit, onDelete}) {
  return (
    <View>
      <View style={styles.row}>
        <View style={[styles.container, {backgroundColor: '#ff8e42'}]}>
          <Text style={styles.quote}>
            {item.First_Name} {item.Last_Name}
          </Text>
          <Text style={styles.author}>{item.Email}</Text>
          <TouchableOpacity
            onPress={() => {
              onEdit(item);
            }}>
            <View>
              <Text>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onDelete(item);
            }}>
            <View>
              <Text>Delete</Text>
            </View>
          </TouchableOpacity>

          {/* <Button
            title="Edit"
            onPress={() => {
              onEdit(item);
            }}
          /> */}
          {/* <Button
            title="Delete"
            onPress={() => {
              onDelete(item);
            }}
          /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
  },

  container: {
    padding: 10,
  },

  author: {
    marginTop: 25,
    marginBottom: 10,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 15,
    color: '#FFF',
    textAlign: 'left',
    alignItems: 'flex-start',
  },

  quote: {
    marginTop: 5,
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 17,
    lineHeight: 15,
    color: '#FFF',
  },

  buttons: {
    width: 190,
    flexDirection: 'row',
  },

  rightAction: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 95,
  },

  editAction: {
    backgroundColor: '#497AFC',
  },

  deleteAction: {
    backgroundColor: '#dd2c00',
  },

  actionText: {
    color: '#fff',
    fontWeight: '600',
    padding: 20,
  },
});
