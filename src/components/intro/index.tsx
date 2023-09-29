import './style.css';
import { Chivo } from 'next/font/google';

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
})

const index = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <div className={`introText ${chivo.variable} font-chivo space-y-1 text-white text-3xl`}>
        <h1>I am Jared Velasquez.</h1>
        <h2>Student of Computer Science at the</h2>
        <h2>University of California, Los Angeles.</h2>
      </div>

      {/* Full intro background image */}
      <div
        className="absolute inset-0 w-full max-w-5xl ml-auto mr-auto z-0"
        style={{
          backgroundImage: 'url(/images/intro_background.jpg)',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          filter: 'brightness(80%)',
        }} 
      />

      {/* Foreground image */}
      <div
        className="absolute inset-0 w-full max-w-5xl ml-auto mr-auto z-5"
        style={{
          backgroundImage: 'url(/images/intro_foreground_copy.png)',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          filter: 'brightness(80%)',
        }} 
      />

      {/* Subject image */}
      <div
        className="absolute inset-0 w-full max-w-5xl ml-auto mr-auto z-10"
        style={{
          backgroundImage: 'url(/images/intro_jared_copy_2.png)',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          filter: 'brightness(80%)',
        }} 
      />

    </div>
  );
}

export default index;