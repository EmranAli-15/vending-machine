import Container from "./ui/Container"
import machine from "./assets/machine.png"
import { Alooz, BirthDayCake, CakeSlice, CashOut, CircleCake, Coke, Drinko, Lays, Lemon, Mojo, Potato, SmallCake, Zeros } from "./ui/Icons"
import five from "/notes/5.jpg"
import ten from "/notes/10.jpg"
import twenty from "/notes/20.jpg"
import fifty from "/notes/50.jpg"
import oneHundred from "/notes/100.jpg"
import fiveHundred from "/notes/500.jpg"
import thousand from "/notes/1000.jpg"
import { useEffect, useState } from "react"

import { Engine } from "./utils/engine"

const card_bg = "bg-1 flex flex-col items-center justify-center"
const title_bg = "border-b border-dashed w-full my-2 py-1 border-gray-300"
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


function App() {
  const serialNotes = [five, ten, twenty, fifty, oneHundred, fiveHundred, thousand];
  const [notes, setNotes] = useState<any[]>([]);
  const [total, setTotal] = useState(0);




  // Back notes after baught a product
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= notes.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [notes]);
  // Back notes after baught a product


  // prepare to buy a product
  const [insertedNote, setInsertedNote] = useState(0);

  const handleBuyProduct = (item: any) => {
    setNotes(() => []);
    const { change } = Engine(item.price, insertedNote);

    setNotes(() => change.change);
    setTotal(change.total);
    setInsertedNote(0)
  }

  return (
    <Container>

      <div className="bg-1 flex justify-between items-center">
        <div className="flex">
          <CashOut w={120}></CashOut>

          <div className="flex">
            {
              notes.slice(0, count).map((note: any, index: any) => {
                return <div key={index} className={`${index == 0 ? '-ml-5' : '-ml-16'} m-8 -mr-5`}><img className="h-15 w-30 rotate-90" src={serialNotes[note]} alt="" /></div>
              })
            }
          </div>
        </div>

        {total && <h1 className="text-4xl font-bold">You received: {total}</h1>}
      </div>





      <div className="lg:grid lg:grid-cols-3">
        <div className="col-span-1">
          <img className="w-[80%]" src={machine} alt="" />
          <h1 className="border-b mx-5 my-5 border-dashed border-gray-300 text-center">Cash in from here</h1>
          <div className="flex justify-center gap-x-5">
            <button onClick={() => setInsertedNote(20)} className={`${insertedNote && insertedNote !== 20 ? 'btn-disabled' : 'btn-warning'} btn`}>
              <span>20 <br />Tk</span>
            </button>
            <button onClick={() => setInsertedNote(50)} className={`${insertedNote && insertedNote !== 50 ? 'btn-disabled' : 'btn-warning'} btn`}>
              <span>50 <br />Tk</span>
            </button>
            <button onClick={() => setInsertedNote(100)} className={`${insertedNote && insertedNote !== 100 ? 'btn-disabled' : 'btn-warning'} btn`}>
              <span>100 <br />Tk</span>
            </button>
            <button onClick={() => setInsertedNote(500)} className={`${insertedNote && insertedNote !== 500 ? 'btn-disabled' : 'btn-warning'} btn`}>
              <span>500 <br />Tk</span>
            </button>
            <button onClick={() => setInsertedNote(1000)} className={`${insertedNote && insertedNote !== 1000 ? 'btn-disabled' : 'btn-warning'} btn`}>
              <span>1000 <br />Tk</span>
            </button>
          </div>
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
                        <button
                          onClick={() => handleBuyProduct(item)}
                          className={`${insertedNote >= item.price && insertedNote ? "btn-warning" : "btn-disabled"} btn btn-xs`}
                        >
                          buy
                        </button>
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
