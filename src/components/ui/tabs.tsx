"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Tab = {
  title: string
  value: string
  content?: string | React.ReactNode | any
}

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[]
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  contentClassName?: string
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0])
  const [tabs, setTabs] = useState<Tab[]>(propTabs)
  const [hovering, setHovering] = useState(false)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const tabsRef = useRef<HTMLDivElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLElement>(null)

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs]
    const selectedTab = newTabs.splice(idx, 1)
    newTabs.unshift(selectedTab[0])
    setTabs(newTabs)
    setActive(newTabs[0])
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  // useEffect(() => {
  //   if (tabsRef.current) {
  //     const activeTab = tabsRef.current.querySelector(`[data-active="true"]`)
  //     if (activeTab) {
  //       activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  //     }
  //   }
  // }, [active])

  useEffect(() => {
    // Find the scrollable element from the ScrollArea component
    if (scrollAreaRef.current) {
      const scrollableElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement;
      if (scrollableElement) {
        scrollContainerRef.current = scrollableElement;
        scrollableElement.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
      }
    }
    
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="relative w-full">
        {/* Left scroll indicator */}
        {showLeftArrow && (
          <div className="absolute left-0 top-8 -translate-y-1/2 z-10 dark:from-black to-transparent pr-2 h-16 flex items-center">
            <button 
              onClick={scrollLeft} 
              className="p-1 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-black dark:text-white" />
            </button>
          </div>
        )}
        
        {/* Right scroll indicator */}
        {showRightArrow && (
          <div className="absolute right-0 top-8 -translate-y-1/2 z-10 dark:from-black to-transparent pl-2 h-16 flex items-center">
            <button 
              onClick={scrollRight} 
              className="p-1 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-black dark:text-white" />
            </button>
          </div>
        )}

        <ScrollArea ref={scrollAreaRef} className="w-full max-w-full h-16">
          <div
            ref={tabsRef}
            className={cn(
              "flex flex-row items-center justify-start [perspective:1000px] relative py-2 px-4",
              containerClassName,
            )}
          >
            {propTabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => moveSelectedTabToTop(idx)}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={cn("relative px-4 py-2 rounded-full whitespace-nowrap flex-shrink-0 border-2", 
                  active.value === tab.value ? "border-gray-300 dark:border-zinc-700" : "border-transparent",
                  tabClassName
                )}
                style={{ transformStyle: "preserve-3d" }}
                data-active={active.value === tab.value}
              >
                {active.value === tab.value && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className={cn("absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full", activeTabClassName)}
                  />
                )}
                <span className="relative block text-black dark:text-white">{tab.title}</span>
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-12 rounded-2xl", contentClassName)}
      />
    </>
  )
}

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string
  key?: string
  tabs: Tab[]
  active: Tab
  hovering?: boolean
}) => {
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: idx === 0 ? [0, 40, 0] : 0,
          }}
          className={cn(
            "w-full h-full absolute top-0 left-0 backdrop-filter backdrop-blur-xl shadow-[11px_9px_10px_1px_rgba(0,_0,_0,_0.1)]",
            className,
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  )
}