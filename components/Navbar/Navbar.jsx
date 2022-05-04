import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseCreate";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({}) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const [authenticatedState, setAuthenticatedState] =
    useState("not-authenticated");
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === "SIGNED_IN") {
          setAuthenticatedState("authenticated");
          router.push("/");
        }
        if (event === "SIGNED_OUT") {
          setAuthenticatedState("not-authenticated");
        }
      }
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);
  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setAuthenticatedState("authenticated");
    }
  }
  async function handleAuthChange(event, session) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log({ error });
    } else {
      setAuthenticatedState("not-authenticated");
    }
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.navlinks}>
        <div className={styles.logo}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.6,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 1.3,
                },
              },
            }}
          >
            <img src="/logo2.png" />
          </motion.div>
        </div>
        <nav
          className={`${styles.nav} ${
            menuOpen && size.width < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              {authenticatedState === "authenticated" && (
                <Link href="/profile" onClick={menuToggleHandler}>
                  Profile
                </Link>
              )}
            </li>
            <li>
              {authenticatedState === "not-authenticated" && (
                <Link href="/login" onClick={menuToggleHandler}>
                  Sign In
                </Link>
              )}
              {authenticatedState === "authenticated" && (
                <button
                  onClick={() =>
                    signOut() && alert("logged out") && { menuToggleHandler }
                  }
                >
                  Sign out
                </button>
              )}
            </li>
            <li>
              <a href="/" onClick={menuToggleHandler}>
                Home
              </a>
            </li>
            <li>
              <a href="/cruises" onClick={menuToggleHandler}>
                Cruise trip
              </a>
            </li>
            <li>
              <a href="/vehicles" onClick={menuToggleHandler}>
                Rental
              </a>
            </li>
            <li>
              <a href="/restaurant" onClick={menuToggleHandler}>
                Restaurant
              </a>
            </li>
            <li>
              <a href="/island" onClick={menuToggleHandler}>
                Islands
              </a>
            </li>
            <li>
              <a href="/events" onClick={menuToggleHandler}>
                Events
              </a>
            </li>
            <li>
              <a href="/about" onClick={menuToggleHandler}>
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}
export default Navbar;
