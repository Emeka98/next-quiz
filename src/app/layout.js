import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import SwitchTheme from "@/components/SwitchTheme";
export const metadata = {
  title: "My Quiz",
  description: "created by Lucky codes",
};
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`dark:bg-[url("/pattern-background-mobile-dark.svg")] bg-[url("/pattern-background-mobile-light.svg")] dark:md:bg-[url("/pattern-background-tablet-dark.svg")] md:bg-[url("/pattern-background-tablet-light.svg")] bg-[#f4f6fa] dark:bg-[#313e51] dark:text-slate-200 flex flex-col  text-[#2b3849] lg:bg-[url("/pattern-background-desktop-light.svg")]  dark:lg:bg-[url('/pattern-background-desktop-dark.svg')] `}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-full lg:w-[80%] mx-auto flex-col flex  px-4 text-slate-700 font-serif">
              <SwitchTheme />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
