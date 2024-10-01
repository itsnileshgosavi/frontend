import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuTrigger, DropdownMenuSubContent } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "@/lib/theme/theme-provider"
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import CreateChannelDialog from "./CreateChannel"
import { Link } from "react-router-dom"

const AvatarComponent = () => {
    const { theme, setTheme } = useTheme();
    const user = useSelector((state) => state.user.user);
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-gray-500 text-white">{user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="flex flex-row items-center gap-2">
                        <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-start justify-start">
                            <span className="text-sm font-medium">{user.firstName} {user.lastName}</span>
                            <span className="text-xs text-gray-500 mt-1">{user.email}</span>
                            {user.channels.length > 0 ? <Link to="/channel"><span className="text-xs text-blue-500 mt-1">View your channel</span></Link> : <CreateChannelDialog />}
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Google Account

                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Switch Account

                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                            Cookies.remove("authtoken");
                            window.location.reload();
                        }}>
                            Sign Out

                        </DropdownMenuItem>

                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            YouTube Studio
                            
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            YouTube Premium
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Purchases and Memberships
                        </DropdownMenuItem>
                         </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger><Moon className="mr-2" size={16}/> Appearance: {theme === "dark" ? "Dark" : "Light"}</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}><Moon className="mr-2" size={16}/> Dark Theme</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("light")}><Sun className="mr-2" size={16}/> Light Theme</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => setTheme("system")}><Laptop className="mr-2" size={16}/> Use Device Theme</DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                        </DropdownMenuGroup>
                        <DropdownMenuItem>
                            Your data in YouTube
                            
                        </DropdownMenuItem>
                    
                    <DropdownMenuItem>Language</DropdownMenuItem>
                    <DropdownMenuItem>Location</DropdownMenuItem>
                    <DropdownMenuItem >Keyboard shortcuts</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                       Settings
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>

    )
}

export default AvatarComponent;
