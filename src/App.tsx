import Container from "./ui/Container"
import machine from "./assets/machine.png"
import { Coke, Drinko, Lemon, Mojo, Potato } from "./ui/Icons"

function App() {

  return (
    <Container>
      <h1 className="bg-1">This is my vending machine</h1>


      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <img src={machine} alt="" />
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-1">
              <Coke w={150}></Coke>
            </div>
            <div className="bg-1">
              <Mojo w={150}></Mojo>
            </div>
            <div className="bg-1">
              <Lemon w={150}></Lemon>
            </div>
            <div className="bg-1">
              <Drinko w={150}></Drinko>
            </div>
            <div className="bg-1">
              <div className="relative">
                <Potato w={110}></Potato>
                <h1 className="absolute top-10 left-7 text-white font-bold -rotate-[30deg]">Potato</h1>
              </div>
            </div>
            <div className="bg-1">1</div>
            <div className="bg-1">1</div>
            <div className="bg-1">1</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default App
