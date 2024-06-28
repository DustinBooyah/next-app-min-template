import "@mantine/core/styles.css";
import React from "react";
import { createTheme, MantineProvider, ColorSchemeScript, DirectionProvider } from "@mantine/core";
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

// import { theme } from "../theme";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const metadata = {
  title: "Dashboard Mantine",
  description: "Mantine Dashboard - First draft",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
      <DirectionProvider>
					<MantineProvider theme={theme}>
						<ModalsProvider>
							{children}
						</ModalsProvider>
						<Notifications />
					</MantineProvider>
				</DirectionProvider>
      </body>
    </html>
  );
}
