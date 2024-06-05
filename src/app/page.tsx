export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-700 text-white">
      <div className="text-left p-8 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Monitor Your Heart Rate and Saturation</h1>
        <p className="mb-8">Stay informed about your health with accurate heart rate and saturation measurements.</p>
        <div>
          <a href="/learn-more"><button className="bg-black text-white px-4 py-2 mr-4">Learn More</button></a>
          <a href="/register"><button className="bg-gray-300 text-black px-4 py-2">Sign Up</button></a>
        </div>
      </div>
      <div className="p-8">
        <div className="bg-gray-600 h-48 w-72 flex items-center justify-center">
          <span className="text-2xl">Image</span>
        </div>
      </div>
    </section>
  );
}
