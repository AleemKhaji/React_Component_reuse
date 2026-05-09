import { useState } from "react";
import Accordion from "./accordion";
import "./accordion.scss";

export default function AccordionGroup({ items = [] }) {
  const [openId, setOpenId] = useState(null);
  // null = all closed. Only one id open at a time.

  function handleToggle(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div className="accordion-group">
      {items.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
}
