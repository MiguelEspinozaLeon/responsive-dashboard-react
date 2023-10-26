import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"
import LeftColumn from "./components/LeftColumn"
import RightColumn from "./components/RightColumn"

function App() {
  
  return (
    <main className="flex">
        <SideBar />
        <div className="flex flex-col flex-1 relative">
          <NavBar />
          <div className="grid md:grid-cols-3 grid-cols-1 w-full">
              <div className="col-span-2">
                <LeftColumn />
              </div>
              <div className="w-full">
                <RightColumn />
              </div>
          </div>
        </div>
    </main>
  )
}

export default App
