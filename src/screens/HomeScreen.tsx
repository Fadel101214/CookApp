import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default function HomeScreen({ navigation }: any) {
  const [plats, setPlats] = useState<any[]>([]);

  useEffect(() => {
    const fetchPlats = async () => {
      const querySnapshot = await getDocs(collection(db, "plats"));
      const list: any[] = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setPlats(list);
    };
    fetchPlats();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={plats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#cce5ff',
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('Détails du Plat', { plat: item })}
          >
            <Text style={{ fontSize: 18 }}>{item.nom}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
