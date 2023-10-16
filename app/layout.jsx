import "@styles/globals.css";

import Provider from "@components/Provider";
import Nav from "@components/Nav";
export const metadata = {
  title: "AI PromptsBites",
  description: "Find & Share dayly AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
