"use client";

import * as React from "react";
import {
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import Link from "next/link";
import { NavUser } from "./nav-user";
import { getCurrentUser } from "@/services/AuthService";

// Define your navigation data, but separate it by roles
const data = {
  admin: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Home",
      url: "/",
      icon: Bot,
    },
    {
      title: "Manage Users",
      url: "/admin/users",
      icon: Bot,
    },
    {
      title: "Shop",
      url: "/admin/shop/products",
      icon: Bot,
      items: [
        {
          title: "Medicine",
          url: "/admin/medicine/create-products",
        },
        {
          title: "Manage Medicine",
          url: "/admin/medicine/all-products",
        },
        // {
        //   title: "Manage Categories",
        //   url: "/admin/shop/category",
        // },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/admin/profile",
        },
      ],
    },
  ],
  user: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Home",
      url: "/",
      icon: Bot,
    },
    {
      title: "Shop",
      url: "/user/shop/products",
      icon: Bot,
      items: [
        {
          title: "Manage Medicine",
          url: "/user/shop/products",
        },
        {
          title: "Manage Categories",
          url: "/user/shop/category",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/user/profile",
        },
      ],
    },
  ],
  secondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userRole, setUserRole] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchUserRole = async () => {
      const userInfo = await getCurrentUser();
      if (userInfo && userInfo.role) {
        setUserRole(userInfo.role);
      }
    };

    fetchUserRole();
  }, []);

  // If the role is still being fetched, you can show a loader
  if (userRole === null) {
    return <div>Loading...</div>;
  }

  // Determine which data to use based on user role
  const navData = userRole === "admin" ? data.admin : data.user;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center"></div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">MediMart</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
