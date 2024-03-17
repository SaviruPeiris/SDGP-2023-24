import React from 'react';

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right Doctor for Your Needs',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue ac risus tempor eleifend. Sed sollicitudin malesuada lacus nec interdum. Fusce scelerisque, quam sit amet aliquam eleifend, sapien justo tempor metus, vel semper enim purus vitae justo. Sed dignissim risus a tortor dapibus fringilla.',
    date: 'March 17, 2024',
    image: 'https://via.placeholder.com/300' // Placeholder image URL
  },
  {
    id: 2,
    title: 'The Benefits of E-Channelling for Patients',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue ac risus tempor eleifend. Sed sollicitudin malesuada lacus nec interdum. Fusce scelerisque, quam sit amet aliquam eleifend, sapien justo tempor metus, vel semper enim purus vitae justo. Sed dignissim risus a tortor dapibus fringilla.',
    date: 'March 15, 2024',
    image: 'https://via.placeholder.com/300' // Placeholder image URL
  },
  {
    id: 2,
    title: 'Improving Patient Engagement through Automated Appointment Reminders',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue ac risus tempor eleifend. Sed sollicitudin malesuada lacus nec interdum. Fusce scelerisque, quam sit amet aliquam eleifend, sapien justo tempor metus, vel semper enim purus vitae justo. Sed dignissim risus a tortor dapibus fringilla.',
    date: 'March 15, 2024',
    image: 'https://via.placeholder.com/300' // Placeholder image URL
  },
];

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
