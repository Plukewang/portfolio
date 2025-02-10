import Navbar from "../ui/navbar"
import NavBarLinks from "../ui/navBarLinks"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col ">
        <Navbar/>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        <NavBarLinks top = {false}/>
      </div>
    );
  }
