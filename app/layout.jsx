export const metadata = {
  title: "Takwirira Labs",
  description: "Projects and services from Takwirira Labs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: "100%", overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
        {/* Locks html/body to the viewport so the page itself never scrolls —
            only the content region inside the app shell does (see page.jsx).
            That's what keeps the header/footer fixed in place. */}
        <style dangerouslySetInnerHTML={{ __html: `html { height: 100%; overflow: hidden; }` }} />
        {children}
      </body>
    </html>
  );
}
