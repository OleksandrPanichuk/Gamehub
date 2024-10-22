import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/service";

import { Container, Navbar, Sidebar  } from "./_components";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
};

const CreatorLayout = async ({
  params,
  children,
}: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }

  return ( 
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>
          {children}
        </Container>
      </div>
    </>
  );
}
 
export default CreatorLayout;