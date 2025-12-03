import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  if (!selectedUser) return null;

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-2.5 border-b border-stone-700 bg-[#0f0f0f] flex items-center justify-between">
      
      {/* Left: Avatar + User Info */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <img
            src={selectedUser.profilePic || "/avatar.png"}
            alt={selectedUser.fullName}
            className="w-full h-full object-cover"
          />
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-stone-900" />
          )}
        </div>

        <div className="flex flex-col">
          <h3 className="font-medium text-white truncate">{selectedUser.fullName}</h3>
          <p className={`text-sm ${isOnline ? "text-green-400" : "text-stone-400"}`}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Right: Close Button */}
      <button
        onClick={() => setSelectedUser(null)}
        className="p-2 rounded-lg hover:bg-stone-800 transition-colors"
      >
        <X className="w-5 h-5 text-stone-300" />
      </button>
    </div>
  );
};

export default ChatHeader;
