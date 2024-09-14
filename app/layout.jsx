import "@styles/globals.css";

export const metadata = {
  title: "Admin Panel",
  description: "Dashboard",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main"></div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
