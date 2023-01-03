import Home from '~/pages/Home';
import Products from '~/pages/Products';

const publicRouter = [
    { path:'/', component: Home},
    { path:'/all-products', component: Products},
];

const privateRouter = [

]

export { publicRouter, privateRouter}