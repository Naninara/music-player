import { Inter } from "next/font/google";
import AudioPlayer from "./components/AudioPlayer";
import "react-h5-audio-player/lib/styles.css";
import "./globals.css";
import StateProvider from "./stateProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateProvider>
        <body className={inter.className}>
          <>{children}</>
          <div className="fixed  bottom-0 w-auto">
            <AudioPlayer />
          </div>
        </body>
      </StateProvider>
    </html>
  );
}
