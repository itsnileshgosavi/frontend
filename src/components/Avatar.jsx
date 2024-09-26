import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AvatarComponent = ({src}) => {
    return (
        <Avatar>
            <AvatarImage src={src} />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export default AvatarComponent;
