export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded"/>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded">Sign In</button>
        </form>
      </div>
    </section>
  );
}
