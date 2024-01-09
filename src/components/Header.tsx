import { Bell, UserCircle } from "@phosphor-icons/react";


export function DashboardHeader() {
  return (
    <div className="flex h-16 gap-10 justify-end p-4 items-center bg-white shadow-lg w-full">
      <Bell size={32} className="text-gray-600 cursor-pointer" />
      <UserCircle size={32} className="text-gray-600 cursor-pointer" />
    </div>
  )
}