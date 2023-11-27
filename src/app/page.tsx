import HomePage from "@/components/homePage"
export default function Home() {
  return (
   <>
   <HomePage/>
   </>

  )
}
// pages/index.js (or any protected page)
// import { useRequireAuth } from '../utils/auth';

// const HomePage = () => {

//   const ProtectedPage = () => {
//     useRequireAuth(); // Ensure authentication on this page
    
//     // Rest of your component code for the protected page
//   };
//   return (
//     <div>
//       <HomePage />
//     </div>
//   );
// };

// export default HomePage;
