// import './App.css'

// function App() {
//   return (
//     <div
//       className="min-h-screen bg-repeat bg-center"
//       style={{ backgroundImage: "url('/Forest Website.pdf-image-000.jpg')" }} // Use the same image
//     >
//       {/* Website content here */}
//       <div className="max-w-7xl mx-auto p-4">
//         <h1 className="text-3xl font-bold text-center text-gray-800">
//           Welcome to My Website!
//         </h1>
//         {/* More content */}
//       </div>
//     </div>
//   );
// }


// export default App;


// function App() {
//   return (
//     <div className="relative min-h-screen">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/Forest Website.pdf-image-000.jpg')" }}
//       ></div>

//       {/* Cream overlay for bright, soft background */}
//       <div className="absolute inset-0 bg-[#edeae2] bg-opacity-90 mix-blend-lighten"></div>

//       {/* Main content */}
//       <div className="relative z-10 flex items-center justify-center h-screen">
//         <h1 className="text-4xl font-bold text-gray-800">Welcome to My Website!</h1>
//       </div>
//     </div>
//   );
// }

// export default App;







// import DiamondCard from "./DiamondCard";
// import Header from "./Header";
// import ShopByCategory from "./Shopbycategory";

// function App() {
//   return (
//     <div className="relative min-h-screen">
//       {/* Base background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/Forest Website.pdf-image-000.jpg')" }}
//       ></div>

//       {/* Cream overlay */}
//       <div className="absolute inset-0 bg-[#edeae2] bg-opacity-90 mix-blend-lighten"></div>

//       {/* Main content */}
//       <div>
//       <div className="relative z-10">
//         <Header />
//         <DiamondCard></DiamondCard>
//         <ShopByCategory></ShopByCategory>
//         {/* You can add more components here */}
//       </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DiamondCard from "./DiamondCard";
import Header from "./Header";
import ShopByCategory from "./Shopbycategory";
import BraceletDetail from "./BraceletDetail"; // import your Bracelet detail component
import Bracelet from "./Bracelet"
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Earring from "./Earring";
import Rings from "./Rings";
import Necklace from"./Necklace"
import JewelryShowcase from "./Shopbycategory";
import CustomdesignPage from "./CustomdesignPage";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Header />
      <DiamondCard />
      <JewelryShowcase></JewelryShowcase>

    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Base background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Forest Website.pdf-image-000.jpg')" }}
      ></div>

      {/* Cream overlay */}
      <div className="absolute inset-0 bg-[#edeae2] bg-opacity-90 mix-blend-lighten"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bracelet" element={<Bracelet/>} />
            <Route path="/bracelet/:id" element={<BraceletDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/earrings" element={<Earring />} />
            <Route path="/rings" element={<Rings/>} />
            <Route path="/necklaces" element={<Necklace />} />
            <Route path="/custom-design" element={<CustomdesignPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
