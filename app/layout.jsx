import "./globals.css";

export const metadata = {
  title: "Takwirira Labs | Deliberate software for consequential work",
  description:
    "Takwirira Labs creates considered software for complex, consequential work—from personal finance to radiation oncology operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
