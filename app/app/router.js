import { createStackNavigator, createAppContainer } from 'react-navigation';
import NumerosRandomicos from './NumerosRandomicos';
import FrasesDoDia from './FrasesDoDia';
import Jokenpo from './Jokenpo';
import CatalogoDeItens from './Catalogo';
import HomeScreen from './Home';
import Calculadora from './Calculadora';
import CalculadoraRedux from './CalculadoraRedux';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Catalogo: CatalogoDeItens,
    Frases: FrasesDoDia,
    Numeros: NumerosRandomicos,
    JokenPO: Jokenpo,
    Calculador: Calculadora,
    CalculadorRedux: CalculadoraRedux
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#666',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export const AppContainer = createAppContainer(AppNavigator);
