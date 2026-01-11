import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../assets/variables/colors';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: ThemeColors.backgroundColor,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  featuresContainer: {
    marginBottom: 30,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  navigationContainer: {
    marginTop: 20,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
