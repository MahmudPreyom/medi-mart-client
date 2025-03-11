import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="p-4 text-center">
      <Input placeholder="Search medicines..." className="w-full max-w-md" />
    </div>
  );
}