import "./globals.css";

export const metadata = {
  title: "Takwirira Labs | Deliberate software for consequential work",
  description:
    "Takwirira Labs creates considered software for complex, consequential work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
