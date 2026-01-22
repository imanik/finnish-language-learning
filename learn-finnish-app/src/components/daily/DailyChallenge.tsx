import React from "react";
import NavWrapper from "../wrapper/NavWrapper";
import BodyWrapper from "../wrapper/BodyWrapper";
import ChallengeOne from "./ChallengeOne";
import { datasets } from "../../data/datasets";
import { adjectivesData } from "../../data/basicA1";



interface Data{
    english: string,
    finnish: string,
    pronunciation?: string,
}

function getRandomDataset() {
  const randomIndex = Math.floor(Math.random() * datasets.length);
  return datasets[randomIndex];
}




function DailyChallenge(){

    const keyType = 'basicAdjectives'

    const allItems = (adjectivesData[keyType as keyof typeof adjectivesData] || adjectivesData.basicAdjectives) as Data[] ; // Type assertion to Number[]
    const { name, data } = getRandomDataset();

    console.log("name", name)


    return (
            <BodyWrapper>
     <NavWrapper link="/beginars/family/family-members" title="← Back to Home"> </NavWrapper>
          <div className='mt-16'>
      <ChallengeOne items={allItems} title={name}  />
    </div>
    </BodyWrapper>
    )

}

export default DailyChallenge