import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import axios from "axios";
import { useState } from "react";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function UploadVideoModal({ open, onClose }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            console.log('category', category)
            const response = await axios.post("http://localhost:8000/api/video/upload", { title, description, thumbnailUrl: thumbnail, category }, {
                withCredentials: true
            });
            if (response.data.success) {

                onClose(false);
                alert("Video uploaded successfully");
            }

        } catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false);
        }

    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload Video</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Upload a video to the platform
                </DialogDescription>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-sm font-medium">Title</Label>
                        <Input id="title" className="w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-sm font-medium">Description</Label>
                        <Input id="description" className="w-full" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="thumbnail" className="text-sm font-medium">Thumbnail</Label>
                        <Input id="thumbnail" className="w-full" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category" className="text-sm font-medium">Category</Label>
                        <Select id="category" onValueChange={(value) => setCategory(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="comedy">Comedy</SelectItem>
                                <SelectItem value="gaming">Gaming</SelectItem>
                                <SelectItem value="music">Music</SelectItem>
                                <SelectItem value="news">News</SelectItem>
                                <SelectItem value="sports">Sports</SelectItem>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="entertainment">Entertainment</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* <div className="space-y-2">
                        <Label htmlFor="video" className="text-sm font-medium">Video</Label>
                        <Input id="video" type="file" className="w-full" />
                    </div> */}
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>{loading ? "Uploading..." : "Upload"}</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}