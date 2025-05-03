import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Globe } from "./Globe";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <div className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 gradient-text-primary">Global Presence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Connecting with clients and collaborators across continents. My work spans multiple time zones, bringing innovative solutions to diverse markets around the world.
              </p>
              <p className="text-base text-muted-foreground">
                The markers highlight locations of past projects and current collaborations, showcasing a commitment to delivering excellence on a global scale.
              </p>
            </div>
            <div className="md:w-1/2 h-[600px] relative">
              <Globe />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
