import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, Text, View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AppContextProvider} from './src/context/useAppContext';
import Navigator from './src/navigation';

export const queryClient = new QueryClient();

export default function App() {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar animated={true} barStyle={'dark-content'} />
        <Navigator />
      </QueryClientProvider>
    </AppContextProvider>
  );
}
