import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView:{
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10
  },
  detailLine: {
    fontSize: 18,
    color: '#444',
    marginTop: 6,
    marginBottom: 24,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  probability: {
    fontWeight: '500',
    color: '#666',
  },
  historyButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonGroup: {
    alignItems: 'center',
    gap: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#007AFF',
  },
});