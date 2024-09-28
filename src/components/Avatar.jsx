import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuTrigger, DropdownMenuSubContent } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/lib/theme/mode-toggle"
import { useTheme } from "@/lib/theme/theme-provider"

const AvatarComponent = ({ src }) => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src={src} />
                        <AvatarFallback>NG</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="flex flex-row items-center gap-2">
                        <Avatar>
                            <AvatarImage src={src} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-start justify-start">
                            <span className="text-sm font-medium">Nilesh Gosavi</span>
                            <span className="text-xs text-gray-500">@nileshgosavi</span>
                            <Button variant="link" size="sm" className="w-full m-0 ml-0 pl-0 pr-0">View your channel</Button>
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
                        <DropdownMenuItem>
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
                            <DropdownMenuSubTrigger>Appearance: {theme === "dark" ? "Dark" : "Light"}</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark Theme</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("light")}>Light Theme</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => setTheme("system")}>Use Device Theme</DropdownMenuItem>
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
