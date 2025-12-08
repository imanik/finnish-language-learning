import React from "react";

interface BoxType {
  title: string;
  rule?: string;
  example: string;
  exampleTwo?: string;
}

interface BoxTypeSectionProps {
  heading?: string;
  notice?: string;
  column: number;
  boxTypes: BoxType[];
}



//const Boxsection: React.FC<BoxTypeSectionProps> = ({
 function Boxsection({
    heading = "",
  notice = "",
  column = 2,
  boxTypes = [],
}: BoxTypeSectionProps){
  

//  const {theme} = useTheme() 
 
    let pgClass = "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"

    if(column === 3){

        pgClass = "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"

    }
     
    else if(column === 1){

        pgClass = "grid grid-cols-1 md:grid-cols-1 gap-4 mt-4"

    }
    else{
       pgClass = "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
    }
 
 
  return (
    <section className="bg-gray-900 rounded-lg border border-teal-800 p-4 mb-6">
      <div className="p-4 bg-black rounded-lg mt-4 mb-4">
        {heading && (
          <h2 className="text-2xl text-teal-400 font-bold mb-4">{heading}</h2>
        )}

        <div className={pgClass}>
          {boxTypes.map((vt, index) => (
            <div
              key={index}
              className="bg-black border border-gray-900 rounded-lg p-4"
            >
              <h4 className="text-teal-400 font-semibold mb-4">{vt.title}</h4>
            { vt.rule &&  <p className="text-teal-700 text-sm italic mb-2"> <span className="text-teal-400">{  vt.rule.split("→")[0].trim()}</span>{" "}
              →  { vt.rule.split("→")[1]?.trim()}</p> }
            { vt.example && <p className="text-teal-600 text-sm italic"> <span className="text-teal-400">{  vt.example.split("→")[0].trim()}</span>{" "}
              →  {  vt.example.split("→")[1]?.trim()}</p> }
             { vt.exampleTwo && <p className="text-teal-600 text-sm italic"> <span className="text-teal-400">{ vt.exampleTwo.split("→")[0].trim()}</span>{" "}
              →  {  vt.exampleTwo.split("→")[1]?.trim()}</p> } 
            </div>
          ))}
        </div>

      </div>
      
        {notice && (
          <div className=" p-4 bg-black rounded-lg   mb-4">
          <p className="text-teal-600 mt-2">
           <span className="text-teal-400"> { notice &&  notice.split(":")[0].trim()}</span>{" "}
             : {notice.split(":")[1]?.trim()}
          </p>
          </div>
        )}
    </section>
  );
}

export default Boxsection;
