
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background effects matching the main theme */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-2xl"></div>
      </div>
      
      <div className="text-center relative z-10 px-4">
        <div className="mb-8">
          <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-6 animate-pulse" />
        </div>
        
        <h1 className="text-8xl font-oswald font-black mb-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
          404
        </h1>
        
        <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-white/70 mb-8 font-montserrat max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button 
          asChild
          size="lg" 
          className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
        >
          <a href="/" className="inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
