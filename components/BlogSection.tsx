export default function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add blog post items here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Blog Post Title</h3>
            <p className="text-gray-700">Brief description of the blog post...</p>
            <a href="#" className="text-blue-500 hover:underline mt-4 block">Read more</a>
          </div>
          {/* Repeat for more blog posts */}
        </div>
      </div>
    </section>
  );
}
