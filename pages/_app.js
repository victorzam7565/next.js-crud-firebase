import '@/styles/globals.css'
import '../firebase/firebase.js';
import 'bootswatch/dist/superhero/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
