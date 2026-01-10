import Container from "./ui/Container"
import machine from "./assets/machine.png"
import { Alooz, BirthDayCake, CakeSlice, CircleCake, Coke, Drinko, Lays, Lemon, Mojo, Potato, SmallCake, Zeros } from "./ui/Icons"

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
              <div className="relative">
                <Coke w={150}></Coke>
                <h1 className="absolute top-23 left-[49px] text-white font-bold text-[10px]">Coka~Cola</h1>
              </div>
            </div>
            <div className="bg-1">
              <div className="relative">
                <Mojo w={150}></Mojo>
                <h1 className="absolute top-23 left-[63px] text-white font-bold text-[10px]">Mojo</h1>
              </div>
            </div>
            <div className="bg-1">
              <div className="relative">
                <Lemon w={150}></Lemon>
                <h1 className="absolute top-23 left-[58px] text-white font-bold text-[10px]">Lemon</h1>
              </div>
            </div>
            <div className="bg-1">
              <div className="relative">
                <Drinko w={150}></Drinko>
                <h1 className="absolute top-22 left-[58px] text-white font-bold text-[10px]">Drinko</h1>
              </div>
            </div>


            <div className="bg-1">
              <div className="relative">
                <Potato w={110}></Potato>
                <h1 className="absolute top-10 left-7 text-white font-bold -rotate-[30deg]">Potato</h1>
              </div>
            </div>
            <div className="bg-1">
              <div className="relative">
                <Zeros w={110}></Zeros>
                <h1 className="absolute top-10 left-9 text-white font-bold">Zeros</h1>
              </div>
            </div>
            <div className="bg-1">
              <div className="relative">
                <Alooz w={110}></Alooz>
                <h1 className="absolute top-10 left-8 text-[#fffb00] font-bold -rotate-[30deg]">Alooz</h1>
              </div>
            </div>
            <div className="bg-1">
              <div className="relative">
                <Lays w={110}></Lays>
                <h1 className="absolute top-10 left-9 text-white font-bold">Lays</h1>
              </div>
            </div>


            <div className="bg-1">
              <SmallCake w={110}></SmallCake>
            </div>
            <div className="bg-1">
              <BirthDayCake w={110}></BirthDayCake>
            </div>
            <div className="bg-1">
              <CakeSlice w={110}></CakeSlice>
            </div>
            <div className="bg-1">
              <CircleCake w={110}></CircleCake>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default App
