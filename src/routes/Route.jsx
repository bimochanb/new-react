import { BrowserRouter,useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import Home from '../pages/Home';


function AppRoutes(){
    let routes=useRoutes([
        {
        path:"/",
        element:<MainLayout/>,
        children:[{
            index:true,element:<Home/>
        }]
    },
    ]);
    return routes;
}

export default function Router(){
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

