import React from "react";

interface ListSectionProps {
  title?: string,
  text?: string;
  textTwo?:string,
  example?: string;
  listCounts: number;
  lists: string[];
}

function ListSection({ title, text, textTwo, example, lists, listCounts }: ListSectionProps) {
 
  return (
    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
      <div className="p-4 bg-black rounded-lg mb-4">

        {/* Dynamic title */}
        {title && <h3 className="text-xl font-medium text-teal-400 mb-2">{title}</h3>}
        
        {/* Dynamic text */}
        {text && <p className="text-teal-400">{text}</p>}

        {/* Optional example header */}
        {example && (
          <ul className="text-teal-500 space-y-2 m-6">
            <li>📌 {example}</li>
          </ul>
        )}

        {/* Dynamic list Items */}
        <ul className="list-disc text-teal-700 space-y-2 m-6">
          {lists.slice(0, listCounts).map((item, index) => (
            <li key={index}>
              <span className="text-teal-400">{item.split("→")[0].trim()}</span>{" "}
              → {item.split("→")[1]?.trim()}
            </li>
          ))}
        </ul>

      </div>

      { textTwo && 

          <div className=" p-4 bg-black rounded-lg   mb-4">
                             <p className="text-teal-700">
                               <span className="text-teal-400">{textTwo.split(":")[0].trim()}</span>{" "}
              : {textTwo.split(":")[1]?.trim()}         </p>
                            </div>
    } 
    </section>
  );
}

export default ListSection;
