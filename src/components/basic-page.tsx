import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BasicPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl">
      <Header className="m-2"/>
      <main className="p-2">{children}</main>
      <Footer className="p-2"/>
    </div>
  );
}