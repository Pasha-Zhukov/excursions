import Page from "./components/Page";

const data = [
  {
    img: "1.png",
    imgText: "НОВИНКА",
    title:
      "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
    time: "2 часа",
    infoLi1: "Билет на целый день",
    infoLi2: "Неограниченное число катаний",
    infoLi3: "6 остановок у главных достопримечательностей",
    infoLi4: "Ближайший рейс сегодня",
    price: 900,
    subPrice: "1200 на причале",
  },
  {
    img: "2.png",
    imgText: "КРУГЛЫЙ ГОД",
    title:
      "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
    time: "2 часа",
    infoLi1: "Билет на целый день",
    infoLi2: "Неограниченное число катаний",
    infoLi3: "6 остановок у главных достопримечательностей",
    infoLi4: "Ближайший рейс сегодня",
    price: 900,
    subPrice: "1200 на причале",
  },
  {
    img: "3.png",
    imgText: "",
    title:
      "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020",
    time: "2 часа",
    infoLi1: "Билет на целый день",
    infoLi2: "Неограниченное число катаний",
    infoLi3: "6 остановок у главных достопримечательностей",
    infoLi4: "Ближайший рейс сегодня",
    price: 900,
    subPrice: "1200 на причале",
  },
];

function App() {
  return (
    <>
      {data.map((item, index) => (
        <Page key={index} item={item} />
      ))}
    </>
  );
}

export default App;
