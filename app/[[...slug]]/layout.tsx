import Link from "next/link";

// "/" rewrites to "/en" by default (see next.config.js)
export default function RootLayout({
  params,
  children,
}: {
  params: { slug: string[] };
  children: React.ReactNode;
}) {
  const localeSlug = params.slug[0];

  return (
    <html lang={localeSlug}>
      <body>
        {children}
        <Link href="/">Go Home</Link>
      </body>
    </html>
  );
}
