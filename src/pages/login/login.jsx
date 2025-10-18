import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";import friendImage from "../../assets/friend.png";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [state, setState] = useState("Sign In");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (state === "Sign In") {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Successful");
        navigate("/chat");
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, {
          displayName: userName,
        });
      }
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;
        case "auth/wrong-password":
        case "auth/user-not-found":
          setError("Incorrect email or password.");
          break;
        case "auth/email-already-in-use":
          setError("An account with this email already exists.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters long.");
          break;
        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          break;
        default:
          setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-end bg-[#e6e7fc]">
      {/* Image Side */}
      <div
        className="ml-10 flex-1 bg-cover bg-center"
        style={{
          backgroundImage: `url(${friendImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#e6e7fc",
        }}
      ></div>

      {/* Login Form Side */}
      <div className="flex-1 flex items-center justify-center px-4 bg-[#e6e7fc]">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">
                G
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {state} to your account
            </h2>
          </div>
          {error && (
            <p className="text-center text-sm text-red-600 bg-red-100 p-2 rounded-md">
              {error}
            </p>
          )}
          <form className="mt-8 space-y-6" onSubmit={user_auth}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                {state === "Sign Up" ? (
                  <input
                    id="user-name"
                    name="userName"
                    type="text"
                    autoComplete="UserName"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                ) : null}
              </div>
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                {loading ? "Processing..." : state}
              </button>
              {state === "Sign In" ? (
                <p className="text-center text-sm mt-4">
                  Don't have an account?
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-500 font-medium ml-1"
                    onClick={() => {
                      setState("Sign Up");
                      setError("");
                    }}
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-center text-sm mt-4">
                  Already have an account?
                  <button
                    type="button"
                    className="text-indigo-600 hover:text-indigo-500 font-medium ml-1"
                    onClick={() => {
                      setState("Sign In");
                      setError("");
                    }}
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;