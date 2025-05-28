import { Stack } from "expo-router";

export default function Layout () {
    return (
      <Stack screenOptions={{
        headerShown: true,
        statusBarBackgroundColor: 'black',
        animation: 'fade_from_bottom',

      }} ></Stack>
    );
}

