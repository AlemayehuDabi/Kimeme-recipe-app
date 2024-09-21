import { useSelector } from "react-redux";

export default function ThemeComponent({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className="bg-white text-black dark:bg-gray-800 dark:text-white min-h-screen">
        {children}
      </div>
    </div>
  );
}
