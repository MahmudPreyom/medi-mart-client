import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground py-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MediMart. All rights reserved.</p>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/products" className="hover:underline">Our Products</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;