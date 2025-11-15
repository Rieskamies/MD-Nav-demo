import React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomNavigationBar({ navigation, route, options, back }: any) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {/* Only show back button on screens where user can go back */}
      {back && <Button mode="contained" onPress={navigation.goBack}>Back</Button>}

      <Appbar.Content title={title} />

      {/* Right-side arrow for first screen (can't go back) */}
      {!back && (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Details')}
        />
      )}
    </Appbar.Header>
  );
}
