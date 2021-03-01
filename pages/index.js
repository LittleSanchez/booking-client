import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "../pages/_layout";

function Welcome() {

  return (
    <>
     <div className='welcome_height d-flex align-items-center flex-column'>
        <div className="welcome_margin">
        <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }} layoutId="main-title">Find your dream flat</motion.h1>
        <Link href="/about">
          <a>About</a>
        </Link>
        </div>
        <div>
        <ul className="welcome_ul list-unstyled mt-4">
            <li><i class="fas fa-house-user"></i> buy a new flat</li>
            <li><i class="fas fa-house-damage"></i> sell the old one</li>
            <li><i class="fas fa-laptop-house"></i> find your perfect flat</li>
            <li><i class="fas fa-home"></i> rate our service</li>
        </ul>
        </div>
    </div>
    </>
  );
}

Welcome.Layout = Layout;

export default Welcome
