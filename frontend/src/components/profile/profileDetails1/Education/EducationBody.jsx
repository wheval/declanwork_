import { DialogDemo } from "@/components/Dialog"
import EducationCard from "./EducationCard"
import EducationDialogBody from "./EducationDialogBody"
import { Button } from "@/components/ui/button"
import ButtonWithIcon from "../../ButtonWithIcon"

const EducationBody = ({viewOnly, educationData, handleRemove, handleSave}) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className="flex flex-wrap gap-x-10 gap-y-2">
            {
                educationData.length != 0 ? educationData.map(({certName, institution, startDate, endDate}, id) => (
                    <EducationCard viewOnly={viewOnly} key={id} id={id} removeEducation={handleRemove} certName={certName} institution={institution} startDate={startDate} endDate={endDate} />
                )) :
                <div className="text-[#4a4a4a] font-semibold">
                    {/* Showcase your degrees */}
                </div>
            }
        </div>
        <div>
           {!viewOnly && <DialogDemo
                    trigger={
                        <div><ButtonWithIcon>Add Education</ButtonWithIcon></div>
                    }
                    header={"Add Education"}
                    body={
                    <EducationDialogBody
                        onSave={handleSave} // pass the save handler
                    />
                    }
                    footer={<Button form="education-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
                    />}
        </div>
    </div>
  )
}

export default EducationBody