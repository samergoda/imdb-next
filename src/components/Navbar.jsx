import { Suspense } from 'react';
import NavBarItem from './NavbarItem.jsx';

function NavBar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      <Suspense>
        <NavBarItem title='Trending' param='fetchTrending' />
      </Suspense>
      <Suspense>
        <NavBarItem title='Top Rated' param='fetchTopRated' />
      </Suspense>
    </div>
  );
}

export default NavBar;
