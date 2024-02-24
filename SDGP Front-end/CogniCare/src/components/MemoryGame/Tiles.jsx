import { useState } from "react";
import tileImg1 from "../../assets/images/MemoryGame/Drive.png";
import tileImg2 from "../../assets/images/MemoryGame/Figma.png";
import tileImg3 from "../../assets/images/MemoryGame/JavaScript.png";
import tileImg4 from "../../assets/images/MemoryGame/meet.png";
import tileImg5 from "../../assets/images/MemoryGame/Python.png";
import tileImg6 from "../../assets/images/MemoryGame/React.png";
import tileImg7 from "../../assets/images/MemoryGame/Slack.png";
import tileImg8 from "../../assets/images/MemoryGame/VSCode.png";
import Tile from "./Tile";

const Tiles = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: tileImg1, stat: "" },
      { id: 1, img: tileImg1, stat: "" },
      { id: 2, img: tileImg2, stat: "" },
      { id: 2, img: tileImg2, stat: "" },
      { id: 3, img: tileImg3, stat: "" },
      { id: 3, img: tileImg3, stat: "" },
      { id: 4, img: tileImg4, stat: "" },
      { id: 4, img: tileImg4, stat: "" },
      { id: 5, img: tileImg5, stat: "" },
      { id: 5, img: tileImg5, stat: "" },
      { id: 6, img: tileImg6, stat: "" },
      { id: 6, img: tileImg6, stat: "" },
      { id: 7, img: tileImg7, stat: "" },
      { id: 7, img: tileImg7, stat: "" },
      { id: 8, img: tileImg8, stat: "" },
      { id: 8, img: tileImg8, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="MemoryGameContainer">
      {items.map((item, index) => (
        <Tile key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Tiles;
