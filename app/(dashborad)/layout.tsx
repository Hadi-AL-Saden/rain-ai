import NavBar from "@/components/navbar";
import Sidebar from "@/components/sidebar";


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:fixed">
          <Sidebar />
        </div>
        <main className="md:pl-72 h-full">
          <NavBar />
          {children}
        </main>
      </div>
    );
  }