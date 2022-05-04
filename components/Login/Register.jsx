import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseCreate";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [secpassword, setSecPassword] = useState("");

  const confirm = () => {
    if (password === secpassword) return true;
    return false;
  };

  const signUp = async () => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert("logged in");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.Homepage}>
      <div className={styles.container}>
        <h1>Login</h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          class="first"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <input
          class="second"
          placeholder="confirm password"
          value={secpassword}
          onChange={(e) => setSecPassword(e.target.value)}
          type="password"
        />
        <div className={styles.loginbutton}>
          <button onClick={() => (confirm() ? signUp() : alert("error"))}>
            Sign Up
          </button>
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

          <h2>Sign up</h2>
        </div>
      </div>
    </div>
  );
}

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
