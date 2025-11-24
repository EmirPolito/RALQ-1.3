// "use client";

// import { useEffect } from "react";
// import { useTheme } from "next-themes";
// import { Sun, Moon } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";

// const themes = ["light","dark","system","orange","blue","pink","yellow","violet","daltonic"];

// export function ModeToggle() {
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     if(theme && theme !== "system") {
//       document.documentElement.setAttribute("data-theme", theme);
//     } else {
//       document.documentElement.removeAttribute("data-theme");
//     }
//   }, [theme]);

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           size="icon"
//           className="relative w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-300 hover:bg-muted focus-visible:ring-0"
//         >
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent
//         align="end"
//         sideOffset={6}
//         className="mt-2 w-36 rounded-xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-lg animate-in fade-in-0 zoom-in-95"
//       >
//         {themes.map((t) => (
//           <DropdownMenuItem
//             key={t}
//             onClick={() => setTheme(t)}
//             className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
//           >
//             {t.charAt(0).toUpperCase() + t.slice(1)}
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
