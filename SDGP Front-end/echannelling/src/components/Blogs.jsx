import React from 'react';

// Sample data for blog posts
const blogPosts = [
  {
    "id": 1,
    "title": "Choosing the Right Doctor",
    "content": "Selecting the right doctor is a significant decision that impacts your health journey. Consider various factors such as their medical specialties, experience, bedside manner, and compatibility with your needs and values. Research thoroughly, seek recommendations from trusted sources, and schedule initial consultations to assess rapport and communication. Trust your intuition and prioritize a healthcare provider who aligns with your preferences and fosters a supportive patient-doctor relationship.",
    "date": "March 01, 2024",
    "image": "https://via.placeholder.com/300"
  },
  {
    "id": 2,
    "title": "Benefits of E-Channelling",
    "content": "E-Channelling presents a modern solution to healthcare accessibility and convenience. Patients can easily schedule appointments online, eliminating geographical barriers and reducing waiting times. With real-time updates and reminders, patients stay informed and engaged in their care journey. Additionally, e-channelling streamlines administrative processes, allowing healthcare providers to focus more on patient care. Overall, e-channelling empowers patients, enhances efficiency, and improves the healthcare experience for all stakeholders.",
    "date": "March 02, 2024",
    "image": "https://via.placeholder.com/300"
  },
  {
    "id": 3,
    "title": "Automated Appointment Reminders",
    "content": "Automated appointment reminders play a pivotal role in enhancing patient engagement and healthcare efficiency. By delivering timely notifications via email, SMS, or phone calls, they reduce no-show rates and improve attendance. Moreover, these reminders facilitate clear communication between patients and healthcare providers, ensuring that patients are well-prepared for their appointments. The streamlined process not only benefits patients by saving time but also optimizes resource allocation within healthcare facilities, leading to improved operational efficiency and better patient outcomes.",
    "date": "March 01, 2024",
    "image": "https://via.placeholder.com/300"
  }
]
;

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Date: {post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
