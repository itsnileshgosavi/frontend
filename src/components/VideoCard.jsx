import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


export function VideoCard({ title, channel, thumbnail, uploaded, views, channelAvatar }) {
    return (
        <Card className="w-full md:w-[350px] lg:w-[350px] border-none shadow-none">

            <img src={thumbnail} alt={title} className="w-full h-auto rounded-lg cursor-pointer" />

            <CardContent className="flex flex-row gap-2">
                <Avatar className="w-10 h-10 m-2 mt-3 cursor-pointer">
                    <AvatarImage src={channelAvatar} />
                    <AvatarFallback>{channel[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                    <CardTitle className="text-md font-medium font-openSans line-clamp-2 cursor-pointer mt-2">{title} </CardTitle>
                    <div className="flex flex-row gap-2">
                        <CardDescription className="text-xs text-gray-500 cursor-pointer"> {channel} </CardDescription>
                        <CardDescription className="text-xs text-gray-500"> {views} </CardDescription>
                        <CardDescription className="text-xs text-gray-500"> {uploaded} </CardDescription>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}
