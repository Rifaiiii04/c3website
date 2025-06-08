export default function Footer() {
  return (
    <footer className="w-96 md:w-full h-20 bg-gray-800 text-white flex items-center justify-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Code Circle Community. All rights reserved.
      </p>
    </footer>
  );
}
