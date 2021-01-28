import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import firebase from '../fire';

export default function Show() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [listFire, setListFire] = useState('');

  function pushFire() {
    try {
      firebase.database().ref('/crud').push({
        name: name,
        age: age,
      });
    } catch (error) {
      alert(error);
    } finally {
      setName('');
      setAge('');
    }
  }

  useEffect(() => {
    try {
      firebase
        .database()
        .ref('/crud')
        .on('value', (snapshot) => {
          const list = [];
          snapshot.forEach((childItem) => {
            list.push({
              key: childItem.key,
              age: childItem.val().age,
              name: childItem.val().name,
            });
          });
          setListFire(list);
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  function delFire(key) {
    firebase
      .database()
      .ref('/crud/' + key)
      .remove();
  }

  function editFire(key, name, age) {
    navigation.navigate('Edit', {
      key: key,
      name: name,
      age: age,
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.viewFlatlist}
        data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <View style={styles.iconFlat}>
            <Text style={styles.texto}>Nome: {item.name} </Text>
            <Text style={styles.texto}>Idade: {item.age} </Text>

            <TouchableOpacity
              style={styles.btnEnviar}
              onPress={() => {
                editFire(item.key, item.name, item, age);
              }}>
              <Text style={styles.texto}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnEnviar}
              onPress={() => {
                delFire(item.key);
              }}>
              <Text style={styles.texto}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TextInput
        style={styles.tetoInput}
        placeholder="Your name: "
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        style={styles.tetoInput}
        placeholder="Your age: "
        value={age}
        onChangeText={(age) => setAge(age)}
      />
      <TouchableOpacity style={styles.btnEnviar} onPress={pushFire}>
        <Text style={styles.texto}>Enviar</Text>
      </TouchableOpacity>
      <Text style={{color: 'white'}}>{name}</Text>
      <Text style={{color: 'white'}}>{age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
  },
  tetoInput: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFlat: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  btnEnviar: {
    borderWidth: 1,
    borderColor: 'red',
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  viewFlat: {
    maxHeight: 410,
  },
});
