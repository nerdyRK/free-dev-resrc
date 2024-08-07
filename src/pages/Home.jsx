// Home.js
import { useEffect, useRef } from "react";
import CategorySection from "../components/CategorySection";
import categories from "../utils/sitesData";
import Overlay from "../components/Overlay";

function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = sectionRefs.current.indexOf(entry.target);
        const sidebarLink = document.querySelectorAll(".sidebar a")[index];
        if (entry.isIntersecting) {
          sidebarLink.classList.add("bg-gray-700");
        } else {
          sidebarLink.classList.remove("bg-gray-700");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
          <CategorySection category={category} />
        </div>
      ))}
    </div>
  );
}

export default Home;
