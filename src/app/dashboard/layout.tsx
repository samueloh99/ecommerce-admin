import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  return (
    <div>
      <div>navbar</div>
      {children}
    </div>
  );
}
