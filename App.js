import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, FlatList } from "react-native";

export default function App() {
  // State'ler tanımlanıyor: adı, soyadı, sınıfı ve öğrenciler listesi
  const [adi, setAdi] = useState(""); // Öğrenci adı
  const [soyadi, setSoyadi] = useState(""); // Öğrenci soyadı
  const [sinif, setSinif] = useState(""); // Öğrenci sınıfı
  const [ogrenciler, setOgrenciler] = useState([]); // Öğrenciler listesi

  // Yeni öğrenci ekleme işlevi
  const ekleOgrenci = () => {
    // Yeni öğrenci objesi oluşturuluyor ve öğrenciler listesine ekleniyor
    setOgrenciler([...ogrenciler, { id: Math.random().toString(), adi, soyadi, sinif }]);
    // Girdi alanları sıfırlanıyor
    setAdi("");
    setSoyadi("");
    setSinif("");
  };

  // Öğrenci silme işlevi
  const silOgrenci = id => {
    // Öğrenci listesinden siliniyor
    setOgrenciler(ogrenciler.filter(ogrenci => ogrenci.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Öğrenci giriş formu */}
      <TextInput style={styles.input} placeholder="Öğrenci Adı" value={adi} onChangeText={setAdi} />
      <TextInput style={styles.input} placeholder="Öğrenci Soyadı" value={soyadi} onChangeText={setSoyadi} />
      <TextInput style={styles.input} placeholder="Sınıfı" value={sinif} onChangeText={setSinif} />
      {/* Ekleme butonu */}
      <TouchableOpacity style={styles.button} onPress={ekleOgrenci}>
        <Text style={styles.buttonText}>EKLE</Text>
      </TouchableOpacity>
      {/* Öğrenci listesi başlığı */}
      <Text style={styles.yazi}>Öğrenci Listesi</Text>
      {/* Öğrenci listesi */}
      <FlatList
        data={ogrenciler}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Adı: {item.adi}</Text>
              <Text style={styles.cardText}>Soyadı: {item.soyadi}</Text>
              <Text style={styles.cardText}>Sınıfı: {item.sinif}</Text>
            </View>
            {/* Silme butonu */}
            <TouchableOpacity onPress={() => silOgrenci(item.id)} style={styles.deleteButtonContainer}>
              <Text style={styles.deleteButton}>SIL</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  input: {
    height: 40,
    width: 350,
    borderColor: "gray",
    backgroundColor: "lightgray",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 25,
  },
  button: {
    marginTop: 10,
    width: 350,
    height: 40,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  yazi: {
    color: "white",
    fontSize: 20,
    paddingBottom: 10,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "lightgray",
    width: 350,
    height: 100,
    borderRadius: 12,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
  },
  cardText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    color: "white",
    backgroundColor: "purple",
    width: 80,
    height: 30,
    borderRadius: 25,
    textAlign: "center",
    lineHeight: 30,
  },
});


