import Container from "./ui/Container"
import machine from "./assets/machine.png"
import { Alooz, BirthDayCake, CakeSlice, CashOut, CircleCake, Coke, Drinko, Lays, Lemon, Mojo, Potato, SmallCake, Zeros } from "./ui/Icons"
import ten from "../public/notes/10.jpg"
import twenty from "../public/notes/20.jpg"
import fifty from "../public/notes/50.jpg"
import oneHundred from "../public/notes/100.jpg"
import fiveHundred from "../public/notes/500.jpg"
import thousand from "../public/notes/1000.jpg"

const card_bg = "bg-1 flex flex-col items-center justify-center"
const title_bg = "border-b border-dashed w-full my-2 py-1 border-gray-300"

function App() {

  const notes = [ten, twenty, fifty, oneHundred, fiveHundred, thousand]

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

      <div className="bg-1 flex">
        {
          notes.map(note => {
            return <div className="m-8 -ml-5 -mr-5"><img className="h-15 w-30 rotate-90" src={note} alt="" /></div>
          })
        }

        <CashOut w={200}></CashOut>
      </div>



      <div className="lg:grid lg:grid-cols-3">
        <div className="col-span-1">
          <img src={machine} alt="" />
        </div>

        <div className="col-span-2 mt-10 shadow-2xl overflow-auto rounded-lg">
          <div className="overflow-y-scroll m-5 lg:h-[80vh]">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

              {
                data.map((item, index) => {
                  return <div key={index} className={card_bg}>
                    <div className={title_bg}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h1 className="text-[#0059ff] text-lg">{item.title}</h1>
                          <p>Tk : {item.price}</p>
                        </div>
                        <button className="btn btn-xs btn-warning text-white">buy</button>
                      </div>
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
      </div>
    </Container>
  )
}

export default App
