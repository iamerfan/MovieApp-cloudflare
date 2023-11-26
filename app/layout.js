import Header from "@/components/Header";
import "./globals.scss";
import ProgressBar from "@/config/NProgress";

export const metadata = {
  title: {
    template: "%s | Movie App ",
    default: "Movie App ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <ProgressBar /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
