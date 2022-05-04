import { useState } from "react";
import { supabase } from "../../utils/supabaseCreate";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Register from "./Register";

export default function SignIn({ setIsLogin }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(email, password, router) {
    try {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      alert("logged in");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className={styles.Homepage}>
      <div className={styles.container}>
        <h1>Login</h1>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <div className={styles.loginbutton}>
          <button onClick={() => login(email, password, router)}>login</button>
          {/* <button onClick={() => signUp(email, password, router)}>signUp</button> */}
        </div>
        <div className={styles.forgotpass}>
          <button>
            <h3>Forgot password?</h3>
          </button>
        </div>

        <h4>Or sign up using</h4>
        <span className={styles.icons}>
          <span className={styles.facebook}>
            <i className={styles.facebook} class="fa-brands fa-facebook"></i>
          </span>
          <span className={styles.twitter}>
            <i class="fa-brands fa-twitter"></i>
          </span>
          <span className={styles.google}>
            <i class="fa-solid fa-g"></i>
          </span>
        </span>

        <div className={styles.sign_up}>
          <h5>Dont have an account?</h5>
          <button onClick={() => setIsLogin(false)}>
            <h2>Sign up</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

// const signUp = async (email, password, router) => {
//   try {
//     const { error } = await supabase.auth.signUp({ email, password });
//     if (error) throw error;
//     alert("logged in");
//     router.push("/");
//   } catch (error) {
//     alert(error.message);
//   }
// };
