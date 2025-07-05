export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8 p-4 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} MyReactSite. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="text-blue-500 mx-2">Privacy</a>
        <a href="#" className="text-blue-500 mx-2">Terms</a>
      </div>
    </footer>
  );
}
