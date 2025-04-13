
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  FileText, 
  Briefcase, 
  Lightbulb, 
  User, 
  LogOut,
  Menu,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from './ThemeToggle';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const links = [
    { path: '/dashboard', label: 'Dashboard', icon: <Home size={18} /> },
    { path: '/profile', label: 'Profile', icon: <User size={18} /> },
    { path: '/resume', label: 'Resume', icon: <FileText size={18} /> },
    { path: '/opportunities', label: 'Opportunities', icon: <Briefcase size={18} /> },
    { path: '/skills', label: 'Skills', icon: <Lightbulb size={18} /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens here
    // For now, just navigate to the login page
    navigate('/');
  };

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded font-medium">RS</div>
              <span className="font-poppins font-medium hidden sm:block">Riseroute</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button 
                  variant={isActive(link.path) ? "default" : "ghost"} 
                  className="gap-2"
                  size="sm"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <span className="hidden sm:inline">Account</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full cursor-pointer">
                    <User size={16} className="mr-2" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="w-full cursor-pointer">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                  <LogOut size={16} className="mr-2" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-2 md:hidden">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant={isActive(link.path) ? "default" : "ghost"} 
                    className="w-full justify-start gap-2" 
                    size="sm"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Button>
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2 text-destructive" 
                size="sm"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                <span>Log out</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
