// "use client";

// import { useTheme } from "next-themes";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectGroup,
//   SelectLabel,
//   SelectItem,
// } from "@/components/ui/select";

// export function ThemeSelect() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Select
//       value={theme ?? "system"} // siempre un string
//       onValueChange={setTheme}
//     >
//       <SelectTrigger className="w-[140px] h-8 text-sm flex items-center justify-between">
//         <span>Opción</span>
//       </SelectTrigger>

//       <SelectContent className="w-[140px] max-h-60 overflow-y-auto">
//         <SelectGroup>

//           <SelectLabel>Opción</SelectLabel>
//           <SelectItem value="pink">Rosa</SelectItem>
//           <SelectItem value="blue">Azul</SelectItem>
//           <SelectItem value="violet">Violeta</SelectItem>
//           <SelectItem value="orange">Naranja</SelectItem>
//           <SelectItem value="yellow">Amarillo</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }
