import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, LayoutDashboard, BookOpen } from 'lucide-react';

// Simple spinner fallback
const SimpleSpinner = ({ size = 'default' }) => (
  <div className={`animate-spin rounded-full border-b-2 ${size === 'sm' ? 'h-4 w-4 border-b-1' : 'h-5 w-5'} border-indigo-600`}></div>
);

const Navbar = () => {
  const navigate = useNavigate();
  
  // Temporarily comment out hooks to test
  // const { mutate, isPending } = useLoggedOut();
  // const { user } = useUserStore();
  
  const [isPending, setIsPending] = React.useState(false);
  const [user, setUser] = React.useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    profilePhoto: ''
  });

  const logoutHandler = () => {
    console.log('Logout clicked');
    setIsPending(true);
    
    // Simulate logout
    setTimeout(() => {
      setIsPending(false);
      navigate('/login');
    }, 1000);
  };

  const navItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      onClick: () => navigate('/dashboard')
    },
    {
      label: 'Profile',
      icon: User,
      onClick: () => navigate('/profile')
    },
    {
      label: 'Your Courses',
      icon: BookOpen,
      onClick: () => navigate('/courses')
    },
    {
      label: 'Logout',
      icon: LogOut,
      onClick: logoutHandler,
      loading: isPending
    }
  ];

  return (
    <div className='h-[12vh] w-full flex items-center justify-between px-6 lg:px-9 shadow-lg bg-white/80 backdrop-blur-sm border-b border-slate-100'>
      {/* Logo */}
      <div className='flex items-center gap-3'>
        <h1 className='text-2xl lg:text-3xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent tracking-tight'>
          EduSmart
        </h1>
      </div>

      {/* User Menu - Simplified without Popover */}
      <div className="relative group">
        <button className='flex items-center gap-3 p-2 hover:bg-slate-100 rounded-xl transition-all duration-200 cursor-pointer'>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-700 font-semibold text-sm">
            {user?.fullName ? user.fullName.slice(0,2).toUpperCase() : 'JD'}
          </div>
          
          <div className='hidden md:block text-left'>
            <p className='font-semibold text-sm text-slate-900 leading-tight'>
              {user?.fullName || 'John Doe'}
            </p>
            <p className='text-xs text-slate-500 font-medium tracking-wide'>
              {user?.email?.split('@')[0] || 'john'}
            </p>
          </div>

          {/* Chevron */}
          <svg className='w-4 h-4 text-slate-400 ml-1 group-hover:text-slate-600 transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className='p-4 border-b border-slate-100'>
            <p className='font-semibold text-slate-900 text-sm tracking-tight'>
              {user?.fullName || 'Welcome back'}
            </p>
            <p className='text-xs text-slate-500 font-medium'>
              Manage your account
            </p>
          </div>

          <div className='py-2 space-y-1'>
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                disabled={item.loading}
                className='group w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl transition-all duration-200 hover:bg-slate-50 hover:shadow-md text-sm font-medium text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed mx-1'
              >
                <item.icon className='w-4 h-4 text-slate-500 group-hover:text-slate-700 flex-shrink-0' />
                <span className='truncate'>{item.label}</span>
                
                {item.loading && (
                  <div className='ml-auto'>
                    <SimpleSpinner size="sm" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;