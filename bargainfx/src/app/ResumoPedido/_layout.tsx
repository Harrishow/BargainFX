import { Stack } from "expo-router";

export default function Layout () {
    return (
      <Stack screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: 'black',
        animation: 'fade_from_bottom',

      }} ></Stack>
    );
}

