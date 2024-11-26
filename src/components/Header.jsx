import { Menu } from "lucide-react";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="flex items-center justify-between px-4 h-14">
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="flex items-center cursor-pointer">
                        <span className="text-xl font-bold">Maalsi Tube</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
