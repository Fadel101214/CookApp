import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';

export default function DetailScreen({ route, navigation }: any) {
  const { plat } = route.params;
  const [nbPersonnes, setNbPersonnes] = useState('1');

  const multiplierQuantite = (quantite: string, nb: number) => {
    if (!quantite || quantite.trim() === '') return 'À volonté';

    const match = quantite.match(/^(\d+([.,]\d+)?)/); // Extrait le nombre s’il y en a
    if (match) {
      const nombre = parseFloat(match[1].replace(',', '.'));
      const reste = quantite.slice(match[1].length).trim();
      const total = (nombre * nb).toFixed(1);
      return `${total} ${reste}`;
    }

    // Sinon : texte ou quantité non numérique
    return quantite + (nb > 1 ? ` x ${nb}` : '');
  };

  const getQuantitéMultipliée = (ingredient: { nom: string; quantite_par_personne: string }) => {
    const nb = parseInt(nbPersonnes) || 1;
    return `${ingredient.nom} : ${multiplierQuantite(ingredient.quantite_par_personne, nb)}`;
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>{plat.nom}</Text>

      <Text>Saisir le nombre de personnes :</Text>
      <TextInput
        keyboardType="numeric"
        value={nbPersonnes}
        onChangeText={setNbPersonnes}
        style={{
          borderWidth: 1,
          borderColor: '#999',
          padding: 8,
          marginVertical: 10,
          borderRadius: 5,
          width: 80,
        }}
      />

      <Text style={{ marginVertical: 10, fontWeight: 'bold' }}>Ingrédients :</Text>
      <FlatList
        data={plat.ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ marginBottom: 5 }}>• {getQuantitéMultipliée(item)}</Text>
        )}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="← Retour au menu" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
