import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg" style={{fontFamily:"sans-serif"}}>
    
      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="What is dementia?" answer="Dementia is a term for a group of symptoms affecting memory, thinking, and social abilities, severely enough to interfere with daily life." />
      </div>

      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="How dementia is caused?" answer="Dementia can be caused by various factors, including Alzheimer's disease, vascular issues, Lewy body disease, traumatic brain injury, and other neurological conditions. These factors lead to a decline in cognitive function, memory loss, and changes in behavior and personality, ultimately resulting in dementia." />
      </div>

      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="What are the early signs of dementia?" answer="Early signs include memory loss, difficulty with familiar tasks, confusion, and changes in mood or personality." />
      </div>

      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Is dementia a normal part of aging?" answer="No, dementia is not a normal part of aging. While risk increases with age, not everyone will develop dementia as they get older." />
      </div>

      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Can dementia be prevented?" answer="While not guaranteed, adopting a healthy lifestyle with regular exercise, a balanced diet, mental stimulation, and social engagement may help reduce the risk." />
      </div>

      <div className="p-2 bg-gray-300 mt-3 mb-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="How is dementia diagnosed?" answer="Diagnosis involves medical history review, physical exams, cognitive tests, brain imaging, and sometimes blood tests to rule out other conditions." />
      </div>

      <div className="p-2 bg-gray-300 mt-3 mb-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Is dementia hereditary?" answer="Some forms of dementia, like early-onset Alzheimer's disease, may have a genetic component, but most cases are not directly inherited." />
      </div>

      <div className="p-2 bg-gray-300 mt-3 mb-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title=" Can dementia be cured?" answer="Currently, there is no cure for most types of dementia. Treatment focuses on managing symptoms and improving quality of life." />
      </div>

      <div className="p-2 bg-gray-300 mt-3 mb-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title=" How does dementia progress?" answer="Dementia progresses differently for each person but generally worsens over time, affecting memory, reasoning, language, and behavior." />
      </div>

      <div className="p-2 bg-gray-300 mt-3 mb-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="What are the treatment options for dementia?" answer="Treatment may include medications to manage symptoms, cognitive therapy, lifestyle changes, and support services." />
      </div>

      
    </div>
  )};

export default FAQ;
