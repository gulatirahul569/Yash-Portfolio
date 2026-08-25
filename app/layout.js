import "./globals.css";

export const metadata = {
  title: "Yash Sharma | Corporate Legal Professional",
  description:
    "Portfolio of Yash Sharma — corporate legal professional with experience across corporate compliance, legal drafting, research and litigation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
