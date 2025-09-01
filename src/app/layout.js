import { Poppins } from "next/font/google";
import { Assistant } from "next/font/google";
import "./globals.scss";
import  {Header, Footer} from "../components";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Urecsys Lobby",
  description: "Urecsys Lobby Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
