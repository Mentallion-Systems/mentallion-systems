import { Box } from "@mui/material";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
}
