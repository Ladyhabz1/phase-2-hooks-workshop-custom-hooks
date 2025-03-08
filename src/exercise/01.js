import { useEffect } from "react";

/* ✅ Step 1: Create and export the custom hook */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Dependency array ensures effect runs when `title` changes
}

export default function Home() {
  /* ✅ Step 2: Use the custom hook instead of useEffect */
  useDocumentTitle("Welcome to the home page!");

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above.
      </p>
    </div>
  );
}
