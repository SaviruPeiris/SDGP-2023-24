import { BiCalendarPlus } from "react-icons/bi"
import { useState } from "react"
export function AddAppointment({onSendAppointmentInfo, lastId}){
  const clearData={
    ownerName:'',
    docName:'',
    aptNotes:'',
    aptDate: '',
    aptTime: ''
  }
  
  async function onFormPublish(){
    const appointmentInfo={
      id: lastId+1,
      docName: formData.docName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate+' '+formData.aptTime
    }
    onSendAppointmentInfo(appointmentInfo)
    setFormData(clearData);
    setToggleForm(false);
  }

  const [toggleForm, setToggleForm] = useState(false);
  const [formData,setFormData]=useState(clearData)

  return (
    <div>
      <button onClick={()=>setToggleForm(!toggleForm)} className="bg-pink-700 text-white px-2 py-3 w-xs text-left rounded-t-md">
        <div> Book Now</div>
      </button>
      {toggleForm && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-md p-6">
            <div className="absolute top-0 right-0 p-2">
              <button onClick={() => setToggleForm(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4"><BiCalendarPlus className="inline-block align-text-top" /> Add Appointment</h2>
              {toggleForm && <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="ownerName" id="ownerName"
                onChange={(e)=>{setFormData({...formData,ownerName: e.target.value})}}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="docName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Doc Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="docName" id="docName"
                onChange={(e)=>{setFormData({...formData,docName: e.target.value})}}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Appointment Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="date" name="aptDate" id="aptDate"
                onChange={(e)=>{setFormData({...formData,aptDate: e.target.value})}}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Appointment Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="time" name="aptTime" id="aptTime"
                onChange={(e)=>{setFormData({...formData,aptTime: e.target.value})}}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea id="aptNotes" name="aptNotes" rows="3"
                onChange={(e)=>{setFormData({...formData,aptNotes: e.target.value})}}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
            </div>
          </div>
  
  
          <div className="pt-5">
            <div className="flex justify-end">
              <button type="submit" 
              onClick={()=>{
                onFormPublish()
              }}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
          </div>
        </div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddAppointment;
