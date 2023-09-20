import Head from "next/head";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://j-sanchez.vercel.app"),
  title: "Jorge Sanchez",
  description: "Sitio oficial del jugador mexicano de futbol Jorge Sanchez",
  openGraph: {
    images: "/img/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ES">
      <Head>
        <title>Variegata | Boutique de plantas de colección</title>
        <meta property="og:title" content="Variegata" />
        <meta
          property="og:description"
          content="Boutique de plantas de colección"
        />
        <meta property="og:image" content="https://variegata.mx/img/meta.jpg" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
