import React from "react";

const FooterColumn = ({ title, items }) => {
  return (
    <div>
      {title && <h3 className="font-semibold mb-4">{title}</h3>}
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item.link ? (
              <a href={item.link} className="hover:text-orange-500">
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
