/*import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return;
  <AppNavigation />;
}
*/
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
