import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <View style={styles.headerSection}>
            <Image
              source={require("../../assets/images/foto-saya.jpg")}
              style={styles.profileImage}
            />

            <Text style={styles.name}>Samuel Chris Jhon Situmorang</Text>
            <Text style={styles.nim}>NIM: 243303621260</Text>
            <Text style={styles.major}>Program Studi: Sistem Informasi</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoSection}>
            <Text style={styles.label}>Universitas</Text>
            <Text style={styles.value}>Universitas Prima Indonesia</Text>

            <Text style={styles.label}>Fakultas</Text>
            <Text style={styles.value}>Fakultas Sains dan Teknologi</Text>

            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>Mahasiswa Aktif</Text>
          </View>

          <View style={styles.quoteBox}>
            <Text style={styles.quoteTitle}>Quote Motivasi</Text>
            <Text style={styles.quoteText}>
              “Terus belajar, terus berkembang, dan jangan takut mencoba hal
              baru.”
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EAF4FF",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#EAF4FF",
  },
  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  headerSection: {
    alignItems: "center",
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "#2563EB",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },
  nim: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563EB",
    marginTop: 8,
  },
  major: {
    fontSize: 16,
    color: "#475569",
    marginTop: 6,
    textAlign: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#CBD5E1",
    marginVertical: 20,
  },
  infoSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  value: {
    fontSize: 16,
    color: "#0F172A",
    fontWeight: "600",
    marginTop: 4,
  },
  quoteBox: {
    backgroundColor: "#DBEAFE",
    borderRadius: 18,
    padding: 16,
  },
  quoteTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1D4ED8",
    marginBottom: 8,
  },
  quoteText: {
    fontSize: 15,
    color: "#1E293B",
    lineHeight: 22,
    fontStyle: "italic",
  },
});
