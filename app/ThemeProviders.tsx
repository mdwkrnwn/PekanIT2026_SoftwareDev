import { ThemeProvider } from "next-themes";
function ThemeProviders({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>)
}

export default ThemeProviders;