import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  function checkNum(num) {
    if (num > reviews.length - 1) {
      return 0;
    }

    if (num <= 0) {
      return reviews.length - 1;
    }

    return num;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };

  const randomPerson = () => {
    let randNum = Math.floor(Math.random() * reviews.length);
    if (randNum === index){
      randNum = index + 1
    }

    setIndex(checkNum(randNum))
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} />
          <span className="icon">
            {" "}
            <FaQuoteRight />{" "}
          </span>
        </div>
        <div className="info">
          <h3 className="name">{name}</h3>
          <h4 className="job">{job}</h4>
          <p className="text">{text}</p>
        </div>
        <div className="btn-container">
          <button onClick={prevPerson} className="btn">
            <FaChevronLeft />
          </button>
          <button onClick={nextPerson} className="btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPerson} className="surprise">
          surprise me
        </button>
      </article>
    </main>
  );
}

export default App;
