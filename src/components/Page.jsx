import "./pageStyle.scss";
import FlightTime from "./FlightTime";

const timetable = [
  { time: "12:00" },
  { time: "13:00" },
  { time: "14:00" },
  { time: "15:00" },
];

function Page(props) {
  const {
    img,
    imgText,
    title,
    time,
    infoLi1,
    infoLi2,
    infoLi3,
    infoLi4,
    price,
    subPrice,
  } = props.item;

  return (
    <div className="container">
      <div className="container_img">
        <img src={img} alt="" className="img" />
        <div className="img_sticker">{imgText}</div>
      </div>
      <div className="container_description">
        <h1 className="title">{title}</h1>
        <div className="time">{time}</div>
        <ul className="list">
          <li className="info">{infoLi1}</li>
          <li className="info">{infoLi2}</li>
          <li className="info">{infoLi3}</li>
          <li className="info">
            {infoLi4}
            <div className="wrap">
              {timetable.map((item, index) => (
                <FlightTime key={index} time={item?.time} />
              ))}
            </div>
          </li>
        </ul>
        <div className="wreper">
          <div className="price">{price}</div>
          <div className="sub_price">{subPrice}</div>
          <button className="btn">Подробнее</button>
        </div>
      </div>
    </div>
  );
}
export default Page;
