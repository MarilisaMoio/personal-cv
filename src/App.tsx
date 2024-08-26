import Aside from "@/components/Aside"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Resume from "@/components/Resume"
import TechStack from "@/components/TechStack"
import SingleTech from "@/components/SingleTech"
import Contacts from "@/components/Contacts"
import Hobbies from "@/components/Hobbies"
import SingleHobby from "@/components/SingleHobby"
import ResumeSection from "@/components/ResumeSection"
import BoolTrainee from "@/components/experiences/BoolTrainee"
import Boolean from "@/components/education/Boolean"
import EducationDegree from "@/components/education/EducationDegree"
import Footer from "@/components/Footer"

import { stack, hobbies } from "@/content.ts"



const App = () => {

  return (
    <>
      <div className="m-auto max-w-[22cm] shadow-sm rounded-lg bg-stone-50 px-4">
        <Header />
        <Main>
          <Aside>
            <Contacts />
            <TechStack>
              { stack.map((tech) => <SingleTech tech={tech} key={tech}/>) }
            </TechStack>
            <Hobbies>
              { hobbies.map((hobby) => <SingleHobby text={hobby.text} name={hobby.name} key={hobby.name} />)}
            </Hobbies>
          </Aside>
          <Resume>
            <ResumeSection title={"Esperienze"}>
              <BoolTrainee />
            </ResumeSection>
            <ResumeSection title={"Formazione"}>
              <Boolean />
              <EducationDegree />
            </ResumeSection>
          </Resume>
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
