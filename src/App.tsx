import Container from "./ui/Container"
import machine from "./assets/machine.png"
import { Alooz, BirthDayCake, CakeSlice, CircleCake, Coke, Drinko, Lays, Lemon, Mojo, Potato, SmallCake, Zeros } from "./ui/Icons"

const card_bg = "bg-1 flex flex-col items-center justify-center"
const title_bg = "border-b border-dashed w-full my-2 py-1 border-gray-300"

function App() {

  const data = [
    {
      component: <Coke w={150}></Coke>,
      title: "Coka~Cola",
      name: "Coka~Cola",
      nameClass: "absolute top-23 left-[49px] text-white font-bold text-[10px]",
      price: 40
    },
    {
      component: <Mojo w={150}></Mojo>,
      title: "Mojo",
      name: "Mojo",
      nameClass: "absolute top-23 left-[63px] text-white font-bold text-[10px]",
      price: 35
    },
    {
      component: <Lemon w={150}></Lemon>,
      title: "Lemon",
      name: "Lemon",
      nameClass: "absolute top-23 left-[58px] text-white font-bold text-[10px]",
      price: 35
    },
    {
      component: <Drinko w={150}></Drinko>,
      title: "Drinko",
      name: "Drinko",
      nameClass: "absolute top-22 left-[58px] text-white font-bold text-[10px]",
      price: 30
    },
    {
      component: <Potato w={110}></Potato>,
      title: "Potato Crackers",
      name: "Potato",
      nameClass: "absolute top-10 left-7 text-white font-bold -rotate-[30deg]",
      price: 10
    },
    {
      component: <Zeros w={110}></Zeros>,
      title: "Zeros Chips",
      name: "Zeros",
      nameClass: "absolute top-10 left-9 text-white font-bold",
      price: 25
    },
  ]

  return (
    <Container>
      <h1 className="bg-1">This is my vending machine</h1>


      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <img src={machine} alt="" />
        </div>

        <div className="col-span-2 mt-10 h-[80vh] overflow-y-scroll">
          <div className="grid grid-cols-4 gap-4">
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <div className="relative">
                <Coke w={150}></Coke>
                <h1 className="absolute top-23 left-[49px] text-white font-bold text-[10px]">Coka~Cola</h1>
              </div>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <div className="relative">
                <Mojo w={150}></Mojo>
                <h1 className="absolute top-23 left-[63px] text-white font-bold text-[10px]">Mojo</h1>
              </div>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <div className="relative">
                <Lemon w={150}></Lemon>
                <h1 className="absolute top-23 left-[58px] text-white font-bold text-[10px]">Lemon</h1>
              </div>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <div className="relative">
                <Drinko w={150}></Drinko>
                <h1 className="absolute top-22 left-[58px] text-white font-bold text-[10px]">Drinko</h1>
              </div>
            </div>


            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <div className="relative">
                <Potato w={110}></Potato>
                <h1 className="absolute top-10 left-7 text-white font-bold -rotate-[30deg]">Potato</h1>
              </div>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <div className="relative">
                <Zeros w={110}></Zeros>
                <h1 className="absolute top-10 left-9 text-white font-bold">Zeros</h1>
              </div>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <div className="relative">
                <Alooz w={110}></Alooz>
                <h1 className="absolute top-10 left-8 text-[#fffb00] font-bold -rotate-[30deg]">Alooz</h1>
              </div>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <div className="relative">
                <Lays w={110}></Lays>
                <h1 className="absolute top-10 left-9 text-white font-bold">Lays</h1>
              </div>
            </div>


            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <SmallCake w={110}></SmallCake>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <BirthDayCake w={110}></BirthDayCake>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <CakeSlice w={110}></CakeSlice>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <CircleCake w={110}></CircleCake>
            </div>
            {/* ================= */}
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <SmallCake w={110}></SmallCake>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <BirthDayCake w={110}></BirthDayCake>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <CakeSlice w={110}></CakeSlice>
            </div>
            <div className={card_bg}>
              <div className={title_bg}>
                <h1>Title</h1>
                <p>Tk : 400</p>
              </div>
              <CircleCake w={110}></CircleCake>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default App
