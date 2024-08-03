"use client"

import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet"
import { navLinks } from "../../../constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import Logo from "./Logo"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2 text-sm:text-xl font-semibold dark:text-white">
        {/* <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        /> */}
       <Logo/>
        
      </Link>

      <nav className="flex gap-2 ring-2 p-1 rounded-md hover:bg-gray-100 hover:ring-green-500">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                {/* <Image 
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                /> */}
                <Link href="/" className="flex items-center gap-2 md:py-2 text-sm:text-xl font-semibold dark:text-white">
        {/* <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        /> */}
       <Logo/>
        
      </Link>

              <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    className={`${isActive && 'gradient-text ring-2 '} mb-2 md:mb-2 p-18 flex whitespace-nowrap text-dark-700 hover:bg-gray-200 w-full rounded-md hover:ring-1 hover:ring-gray-200` }
                    key={link.route}
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav