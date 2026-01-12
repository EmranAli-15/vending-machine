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
    {
      component: <Alooz w={110}></Alooz>,
      title: "Alooz",
      name: "Alooz",
      nameClass: "absolute top-10 left-8 text-[#fffb00] font-bold -rotate-[30deg]",
      price: 30
    },
    {
      component: <Lays w={110}></Lays>,
      title: "Lays",
      name: "Lays",
      nameClass: "absolute top-10 left-9 text-white font-bold",
      price: 30
    },
    {
      component: <SmallCake w={110}></SmallCake>,
      title: "Small Cake",
      price: 120
    },
    {
      component: <BirthDayCake w={110}></BirthDayCake>,
      title: "Birthday Cake",
      price: 300
    },
    {
      component: <CakeSlice w={110}></CakeSlice>,
      title: "Cake Slice",
      price: 80
    },
    {
      component: <CircleCake w={110}></CircleCake>,
      title: "Circle Cake",
      price: 130
    },
  ]

  return (
    <Container>
      <h1 className="bg-1">This is my vending machine</h1>


      <div className="lg:grid lg:grid-cols-3">
        <div className="col-span-1">
          <img src={machine} alt="" />
        </div>

        <div className="col-span-2 mt-10 lg:h-[80vh] overflow-y-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

            {
              data.map((item, index) => {
                return <div key={index} className={card_bg}>
                  <div className={title_bg}>
                    <h1 className="text-[#0059ff] text-lg">{item.title}</h1>
                    <p>Tk : {item.price}</p>
                  </div>
                  <div className="relative">
                    {item.component}
                    <h1 className={item?.nameClass}>{item.name}</h1>
                  </div>
                </div>
              })
            }

          </div>
        </div>
      </div>
    </Container>
  )
}

export default App
