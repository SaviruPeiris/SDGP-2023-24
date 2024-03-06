import React from 'react';
import IMAGE from '../Assets/image.jpg';

const ImageUploadAwareness = () => {
    return (
        <div className='container mx-auto px-4 mt-10 font-serif'>
            <div className='flex items-center mb-8 bg-gradient-to-br from-purple-200 to-white rounded-lg p-8 shadow-xl'>
                <img src={IMAGE} alt="image" className='w-69 h-auto mr-8 rounded-lg shadow-lg' />
                <div>
                    <div className='mb-8'>
                        <h1 className="text-4xl font-bold mb-4 text-purple-800">
                            Do you want to know the risk level?
                        </h1>
                        <p className='text-lg leading-relaxed'>
                            When we consider the risk level, we're referring to the analysis of specific features extracted from medical images. These features are indicative of patterns associated with dementia. By processing and interpreting these images, we can provide insights into the potential risk of developing dementia. This information can be valuable for individuals and healthcare professionals to take proactive steps towards prevention or early intervention, leading to better health outcomes.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-5 text-purple-800">
                            What does Image Processing mean?
                        </h2>
                        <p className='text-lg leading-relaxed'>
                            Image processing is the manipulation and analysis of digital images. It involves tasks like enhancing image quality, extracting useful information, and making decisions based on the interpreted content. Pros include automation, enhanced visualization, and improved accuracy, while cons may include complexity, computational intensity, dependency on image quality, and ethical considerations.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto mb-16" style={{ maxWidth: '700px' }}>
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
