"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import gsap from "gsap";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    submenu: [
      { label: "On Campus Courses", href: "/courses?type=on-campus" },
      { label: "Online Courses", href: "/courses?type=online" },
    ],
  },
  { label: "Admission", href: "/admission" },
  { label: "Placement", href: "/placement" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const submenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuItemsRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If clicking on the same page, scroll to top smoothly
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      // Scroll to top, accounting for any potential offset
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Refresh ScrollTrigger after scroll completes
      setTimeout(() => {
        try {
          const { ScrollTrigger } = require("gsap/ScrollTrigger");
          ScrollTrigger.refresh();
        } catch (e) {
          // ScrollTrigger not available, ignore
        }
      }, 500);
    } else if (pathname === href || (href !== "/" && pathname.startsWith(href.split("?")[0]))) {
      // If already on the target page (ignoring query params), scroll to top
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Refresh ScrollTrigger after scroll completes
      setTimeout(() => {
        try {
          const { ScrollTrigger } = require("gsap/ScrollTrigger");
          ScrollTrigger.refresh();
        } catch (e) {
          // ScrollTrigger not available, ignore
        }
      }, 500);
    }
    // Otherwise, let Next.js handle navigation normally
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setOpenSubmenu(null);
      }
    };

    if (openSubmenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSubmenu]);

  // Close mobile menu and scroll to top when pathname changes
  useEffect(() => {
    setIsOpen(false);
    // Scroll to top when navigating to a new page
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant", // Use instant for immediate scroll, then smooth for user interactions
        });
        // Refresh ScrollTrigger after page renders
        setTimeout(() => {
          if (typeof window !== "undefined") {
            try {
              const { ScrollTrigger } = require("gsap/ScrollTrigger");
              ScrollTrigger.refresh();
            } catch (e) {
              // ScrollTrigger not available, ignore
            }
          }
        }, 300);
      });
    });
  }, [pathname]);

  // Animate mobile menu
  useEffect(() => {
    if (!mobileMenuRef.current || !mobileMenuItemsRef.current) return;

    if (isOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";

      // Set initial states
      gsap.set(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
      });
      gsap.set(mobileMenuItemsRef.current.children, {
        opacity: 0,
        y: -20,
      });
      if (backdropRef.current) {
        gsap.set(backdropRef.current, {
          opacity: 0,
        });
      }

      // Animate menu container
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      // Animate backdrop
      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Animate menu items with stagger
      gsap.to(mobileMenuItemsRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.1,
      });
    } else {
      // Allow body scroll when menu is closed
      document.body.style.overflow = "";

      // Animate menu items out
      gsap.to(mobileMenuItemsRef.current.children, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.in",
      });

      // Animate backdrop out
      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }

      // Animate menu container out
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        delay: 0.1,
      });
    }
  }, [isOpen]);

  // Animate submenu when it opens/closes
  useEffect(() => {
    if (!mobileMenuItemsRef.current || !isOpen) return;

    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      const submenuContainers = mobileMenuItemsRef.current?.querySelectorAll(
        ".mobile-submenu"
      );

      submenuContainers?.forEach((container) => {
        const items = container.querySelectorAll("a");
        const isSubmenuOpen = container.classList.contains("block");

        if (isSubmenuOpen && items.length > 0) {
          // Set initial state
          gsap.set(items, { opacity: 0, x: -20 });
          
          // Animate in
          gsap.to(items, {
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          });
        } else if (!isSubmenuOpen && items.length > 0) {
          // Animate out
          gsap.to(items, {
            opacity: 0,
            x: -10,
            duration: 0.2,
            stagger: 0.03,
            ease: "power2.in",
          });
        }
      });
    }, 10);

    return () => clearTimeout(timer);
  }, [openSubmenu, isOpen]);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20 min-w-0">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logos/flyIcon.webp"
              alt="Flywings International Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 flex-shrink-0">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <div
                    className="relative"
                    ref={item.label === "Courses" ? submenuRef : null}
                  >
                    <button
                      type="button"
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-all flex items-center space-x-1",
                        isActive(item.href)
                          ? "text-primary-600 font-bold text-base"
                          : "text-gray-700 hover:text-primary-600",
                        openSubmenu === item.label && "text-primary-600"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenSubmenu(
                          openSubmenu === item.label ? null : item.label
                        );
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          openSubmenu === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            onClick={(e) => {
                              setOpenSubmenu(null);
                              handleLinkClick(e, subItem.href);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 transition-all",
                      isActive(item.href)
                        ? "text-primary-600 font-bold text-base"
                        : "text-sm font-medium text-gray-700 hover:text-primary-600"
                    )}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  isOpen && "opacity-0 rotate-90"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  !isOpen && "opacity-0 -rotate-90",
                  isOpen && "opacity-100 rotate-0"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          ref={backdropRef}
          className="fixed bg-black/50 z-[45] md:hidden"
          onClick={() => setIsOpen(false)}
          style={{ 
            top: "80px", 
            left: 0, 
            right: 0, 
            bottom: 0,
            pointerEvents: "auto"
          }}
        />
      )}

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "md:hidden border-t border-gray-200 overflow-hidden will-change-[height,opacity] bg-white relative z-[60]",
          !isOpen && "hidden"
        )}
        style={{ pointerEvents: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div ref={mobileMenuItemsRef} className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <div key={item.label} className="will-change-transform">
              {item.submenu ? (
                <div>
                  <button
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md flex items-center justify-between transition-colors"
                    onClick={() =>
                      setOpenSubmenu(
                        openSubmenu === item.label ? null : item.label
                      )
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        openSubmenu === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "mobile-submenu overflow-hidden",
                      openSubmenu === item.label ? "block" : "hidden"
                    )}
                    data-open={openSubmenu === item.label ? "true" : "false"}
                  >
                    <div className="pl-4 space-y-1 pt-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={(e) => handleLinkClick(e, subItem.href)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md transition-all",
                    isActive(item.href)
                      ? "text-primary-600 font-bold text-lg bg-primary-50"
                      : "text-base font-medium text-gray-700 hover:bg-gray-50"
                  )}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
