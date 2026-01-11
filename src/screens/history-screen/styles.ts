import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../assets/variables/colors';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.backgroundColor,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  listContainer: {
    paddingBottom: 20,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  historyImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  historyTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#777',
  },
  probabilityText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
    marginTop: 4,
},
});
