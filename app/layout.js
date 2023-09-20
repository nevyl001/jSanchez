import Head from "next/head";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.jorgesanchez4.com"),
  title: "Jorge Sanchez",
  description: "Sitio oficial del jugador mexicano de futbol Jorge Sanchez",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.jorgesanchez4.com",
    title: "Jorge Sanchez",
    description: "Sitio oficial del jugador mexicano de futbol Jorge Sanchez",
    images: "/img/meta-2.jpg",
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
