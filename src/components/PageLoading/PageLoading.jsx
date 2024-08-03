import { useEffect, useState } from "react";
import "./styles.css";

export default function PageLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [window.location.pathname]);

  return (
    <div className={loading ? "page-loading" : "page-loading-done"}>
      <img src="/icons/logo.svg" alt="logo" className="page-loading-logo" />
    </div>
  );
}
