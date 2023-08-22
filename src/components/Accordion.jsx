import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "accordion1",
    text: "Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione, magnam quam laboriosam laudantium temporibus iste similique dignissimos harum voluptates.",
  },
  {
    id: 2,
    title: "accordion2",
    text: "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione, magnam quam laboriosam laudantium temporibus iste similique dignissimos harum voluptates.",
  },
  {
    id: 3,
    title: "accordion3",
    text: "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione, magnam quam laboriosam laudantium temporibus iste similique dignissimos harum voluptates.",
  },
];
function Accordion() {
  const [Open, setOpen] = useState(null);
  const handelOpen = (id) => {
    setOpen(id === Open ? null : id);
  };

  return (
    <div className="accordion">
      {data.map((item) => (
        // we can use children props when we use it between open and close tag
        <AccordionItem
          key={item.id}
          item={item}
          onOpen={handelOpen}
          // setOpen={setOpen}
          open={Open}
        >
          {/* in this situation we can use every thing ihnstead of item.text */}
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ item, setOpen, open, onOpen, children }) {
  // If you want one of the 3 accordions to open.
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = item.id === open;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded " : ""}`}>
      <div
        className="accordion-item__header"
        // onClick={() => setIsOpen((is) => !is)}
        onClick={() => {
          onOpen(item.id);
        }}
      >
        <div>{item.title}</div>
        <ChevronDownIcon
          // we can use class instead of inline style
          className="accordion-item__chevron "
          // style={{
          //   width: "1.2rem",
          //   transition: "all 0.3s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      {/* <div className="accordion-item__content">{item.text}</div> */}
      <div className="accordion-item__content">{children}</div>
      {/* in this way,we cant give transition on div - in tis way, div come and go in dom we cant give transition*/}
      {/* {isOpen && <div className="accordion-item__content">{item.text}</div>} */}
    </div>
  );
}

export default Accordion;
