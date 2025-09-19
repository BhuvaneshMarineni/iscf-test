import { BookOpen, Heart, Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'white' | 'dark';
}

const Logo = ({ className = '', showText = true, variant = 'default' }: LogoProps) => {
  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          container: 'bg-white/10 group-hover:bg-white/20',
          icons: 'text-white',
          text: 'text-white',
          subtext: 'text-white/80'
        };
      case 'dark':
        return {
          container: 'bg-google-blue-50 group-hover:bg-google-blue-100',
          icons: 'text-google-blue-600',
          text: 'text-gray-900',
          subtext: 'text-gray-600'
        };
      default:
        return {
          container: 'bg-google-blue-500 group-hover:bg-google-blue-600',
          icons: 'text-white',
          text: 'text-gray-900',
          subtext: 'text-gray-600'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      <div className={`${colors.container} p-2 rounded-lg transition-all duration-200 relative`}>
        <div className="relative">
          <BookOpen className={`w-8 h-8 ${colors.icons}`} />
          <Globe className={`w-4 h-4 ${colors.icons} absolute -top-1 -right-1`} />
        </div>
      </div>
      {showText && (
        <div>
          <h1 className={`text-xl font-bold ${colors.text}`}>ISCF</h1>
          <p className={`text-sm ${colors.subtext}`}>International Student Christian Fellowship</p>
        </div>
      )}
    </div>
  );
};

export default Logo;