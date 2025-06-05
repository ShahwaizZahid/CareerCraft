import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 24, backgroundColor: "#fff", color: "#000" },
  section: { marginBottom: 12 },
  heading: { fontSize: 18, marginBottom: 8, fontWeight: "bold" },
  text: { fontSize: 12, marginBottom: 4 },
});

export default function ResumePDF({ content }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Resume</Text>
          <Text style={styles.text}>{content}</Text>
        </View>
      </Page>
    </Document>
  );
}
