import React from 'react';
import MRI_scanner from '../Assets/MRI_scanner.jpg'
import brain_scan from '../Assets/brain_scan.jpg'

const ImageUploadAwareness = () => {
    return (
        <div className='container w-full ml-10 font-serif'>
            <div className='text-center mt-20 mb-20'>
                <h1 className="text-5xl font-bold text-purple-700 underline">Upload your MRI scan</h1>
            </div>

            <div className='flex w-full items-center bg-indigo-200 rounded-lg p-8 shadow-2xl'>
                <img className='flex w-full h-auto mr-20 rounded-lg shadow-lg' src={brain_scan} alt="image"  />
                <div>
                    <div className='mb-8 '>
                        <h1 className="text-4xl font-bold mb-4">
                            Do you want to know the risk level?
                        </h1>
                        <p className='text-lg leading-relaxed text-gray-600'>
                            When we consider the risk level, we're referring to the analysis of specific features extracted from medical images. These features are indicative of patterns associated with dementia. By processing and interpreting these images, we can provide insights into the potential risk of developing dementia. This information can be valuable for individuals and healthcare professionals to take proactive steps towards prevention or early intervention, leading to better health outcomes.
                        </p>
                    
                        <h2 className="text-4xl font-bold mb-5 mt-6">
                            What does Image Processing mean?
                        </h2>
                        <p className='text-lg leading-relaxed text-gray-600'>
                            Image processing is the manipulation and analysis of digital images. It involves tasks like enhancing image quality, extracting useful information, and making decisions based on the interpreted content. Pros include automation, enhanced visualization, and improved accuracy, while cons may include complexity, computational intensity, dependency on image quality, and ethical considerations.
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-center mt-20 mb-20'>
                <h1 className='mb-10 text-5xl font-bold text-purple-800'>topic</h1>
                <p className='text-xl'>add something.</p>
            </div>
                <div className='w-[1500px] h-[450px] bg-gray-800/80 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={MRI_scanner} alt="." />
                </div >
                <div className='relative'>
                    <div className='text-center mt-40 mb-10'>
                        <h1 className='mb-10 text-5xl font-bold text-white'>Topic</h1>
                        <p className='text-xl text-white'>add something.</p>
                    </div>
                </div>

            <div className="mx-auto mt-80 mb-10" style={{ maxWidth: '700px'}}>
                <div className="border-2 border-purple-800 rounded-lg p-6 shadow-xl bg-gradient-to-br from-white to-purple-100">
                    <p className="text-purple-800 font-bold mb-2">Patient Consent......</p>
                    <p className='text-lg leading-relaxed'>
                        Before proceeding with any medical examination or procedure, including the collection and analysis of medical images, patient consent is required. By providing consent, the patient acknowledges their understanding of the purpose, risks, and potential benefits of the procedure. They also authorize the healthcare provider to use their medical information for diagnosis, treatment, and research purposes, while ensuring confidentiality and adhering to privacy regulations. Patient consent is essential to ensure transparency, respect for autonomy, and ethical conduct in healthcare practices.
                    </p>
                </div>
            </div>

            <div className='fixed bottom-10 right-10'>
                <button className="font-bold bg-purple-800 text-white px-8 py-3 rounded-lg shadow-xl hover:bg-purple-900">
                    Continue here...
                </button>
            </div>
        </div>
    );
}

export default ImageUploadAwareness;
