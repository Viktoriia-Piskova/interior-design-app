import { Box } from "lucide-react";
import { Button } from "./ui/Button";
export const NavBar = () => {
  const isSignendIn = false; //TODO

  const handleAuthClick = async () => {
    console.log("handleAuthClick");
  };

  return (
    <div className="navbar">
      <div className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />
            <span className="name">Roomify</span>
          </div>
          <ul className="links">
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Community</a>
            <a href="#">Enterprise</a>
          </ul>
        </div>
        <div className="actions">
          {isSignendIn ? (
            <>
              <span className="greeting">Hi, TODO userName</span>
              <Button onClick={handleAuthClick} size="sm">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" variant="ghost" onClick={handleAuthClick}>
                Sign In
              </Button>
              <a href="#upload" className="cta">
                Get Started
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
