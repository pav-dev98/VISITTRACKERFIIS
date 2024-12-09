
import { Calendar, Inbox, Search, Settings , ChartBarIcon, User} from "lucide-react"
import { Link } from "react-router-dom"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "",
    icon: ChartBarIcon,
  },
  {
    title: "Visit",
    url : "visit",
    icon: ChartBarIcon,
  },

  {
    title: "Inbox",
    url: "inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
]
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <h1 className="text-center mt-4 font-black uppercase">Fiis Traker</h1>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Perfil</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/account">
                    <User />
                    <span>Account</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}