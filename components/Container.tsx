import Footer from "./Footer";
import Header from "./Header";

export default function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col gap-y-6 relative w-full min-h-screen p-8 md:p-12 mx-auto md:max-w-3xl md:mx-auto lg:max-w-4xl lg:py-16 text-content selection:bg-selection">
      <Header className="mb-16" />

      <main className="flex flex-col justify-center gap-y-6 h-full">{children}</main>

      <Footer className="mt-16" />
    </div>
  );
}
