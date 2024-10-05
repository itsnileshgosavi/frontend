import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Video, PlusIcon } from "lucide-react";
import { useState } from "react";
import UploadVideoModal from "./UploadVideoModal";
export default function CreateDropdown() {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    return (
        <>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost"><Video size={24} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setIsUploadModalOpen(true)}>
                    <PlusIcon className="w-4 h-4 mr-2" />
                    <span>Upload Video</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <PlusIcon className="w-4 h-4 mr-2" />
                    <span>Live Stream</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            <UploadVideoModal open={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} />
        </>
    )
}