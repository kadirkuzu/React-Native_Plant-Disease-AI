import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 18,
    color: '#B0BEC5',
    marginTop: 30,
    textAlign: 'center',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#757575',
  },
  proceedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  proceedIcon: {
    marginRight: 10,
  },
  proceedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
