import { RouterProvider } from "react-router";
import router from "./router/router";
import { Suspense } from "react";
import Loading from "./components/Loading";
import { ParallaxProvider } from "react-scroll-parallax";
import { LenisProvider } from "./context/LenisContext.tsx";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-bg">
          <Loading size="lg" text="Loading Application..." />
        </div>
      }
    >
      <LenisProvider>
        <ParallaxProvider>
          <RouterProvider router={router} />
        </ParallaxProvider>
      </LenisProvider>
    </Suspense>
  );
};

export default App;
