"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const PDF_PATHS = {
  resume: "/Resume.pdf", // ← Change this to your resume file name
  cv: "/CV.pdf", // ← Change this to your CV file name
}

const DOWNLOAD_NAMES = {
  resume: "Raja_Rehan_Mustafa_Resume.pdf",
  cv: "Raja_Rehan_Mustafa_CV.pdf",
}

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "glow"
    | "neon"
    | "rainbow"
    | "magnetic"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  glowColor?: string
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant = "default", size = "default", children, glowColor = "purple", ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "glow":
          return `
            relative overflow-hidden group
            bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 
            hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500
            text-white font-bold
            transition-all duration-500
            hover:scale-105 hover:shadow-2xl
            hover:shadow-purple-500/50
            before:absolute before:inset-0 
            before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-700
            after:absolute after:inset-0 after:rounded-lg
            after:bg-gradient-to-r after:from-purple-600 after:via-pink-600 after:to-cyan-600
            after:blur-xl after:opacity-0 hover:after:opacity-60
            after:transition-opacity after:duration-500 after:-z-10
          `
        case "neon":
          return `
            relative overflow-hidden group
            bg-transparent border-2 border-cyan-500/50
            text-cyan-400 font-bold
            transition-all duration-500
            hover:bg-cyan-500/10 hover:border-cyan-400
            hover:text-cyan-300 hover:scale-105
            hover:shadow-lg hover:shadow-cyan-500/50
            before:absolute before:inset-0 
            before:bg-gradient-to-r before:from-transparent before:via-cyan-400/20 before:to-transparent
            before:translate-y-[-100%] hover:before:translate-y-[100%]
            before:transition-transform before:duration-500
            after:absolute after:inset-0 after:rounded-lg
            after:bg-cyan-500/20 after:blur-xl 
            after:opacity-0 hover:after:opacity-100
            after:transition-opacity after:duration-500 after:-z-10
          `
        case "rainbow":
          return `
            relative overflow-hidden group
            bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500
            bg-size-200 animate-gradient-x
            text-white font-bold
            transition-all duration-500
            hover:scale-110 hover:rotate-1
            hover:shadow-2xl hover:shadow-purple-500/50
            before:absolute before:inset-[2px] before:rounded-lg
            before:bg-background before:z-10
            after:absolute after:inset-0 after:rounded-lg
            after:bg-gradient-to-r after:from-red-500 after:via-yellow-500 after:via-green-500 after:via-blue-500 after:via-indigo-500 after:to-purple-500
            after:blur-xl after:opacity-0 hover:after:opacity-80
            after:transition-opacity after:duration-500 after:-z-10
          `
        case "magnetic":
          return `
            relative overflow-hidden group
            bg-gradient-to-r from-slate-800 to-slate-900
            hover:from-slate-700 hover:to-slate-800
            text-white font-bold border border-slate-600
            transition-all duration-300
            hover:scale-105 hover:shadow-xl
            before:absolute before:inset-0 
            before:bg-gradient-to-r before:from-blue-500/0 before:via-blue-500/30 before:to-blue-500/0
            before:translate-x-[-100%] hover:before:translate-x-[100%]
            before:transition-transform before:duration-500
            after:absolute after:top-0 after:left-1/2 after:w-0 after:h-0
            after:bg-blue-500 after:rounded-full after:blur-sm
            hover:after:w-full hover:after:h-full hover:after:left-0 hover:after:top-0
            after:transition-all after:duration-500 after:-z-10 after:opacity-20
          `
        default:
          return ""
      }
    }

    if (variant === "rainbow") {
      return (
        <button
          className={cn(
            "relative px-8 py-3 rounded-lg font-bold text-white overflow-hidden group transition-all duration-500 hover:scale-110 hover:rotate-1",
            className,
          )}
          ref={ref}
          {...props}
        >
          {/* Animated Rainbow Background */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 animate-gradient-x"
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Inner Content Background */}
          <div className="absolute inset-[2px] bg-background rounded-lg z-10" />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 rounded-lg blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10" />

          {/* Content */}
          <span className="relative z-20 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold">
            {children}
          </span>
        </button>
      )
    }

    return (
      <Button className={cn(getVariantClasses(), className)} size={size} ref={ref} {...props}>
        <span className="relative z-20">{children}</span>
      </Button>
    )
  },
)

EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton }
