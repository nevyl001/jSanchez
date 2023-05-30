import "./globals.css";

export const metadata = {
  title: "Jorge Sanchez",
  description: "Sitio oficial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ES">
      <body>{children}</body>
    </html>
  );
}
