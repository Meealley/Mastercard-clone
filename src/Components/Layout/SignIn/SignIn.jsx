import React, { useState, useRef } from "react";
// import GoogleSignIn from "./GoogleSignIn";
import Validation from "./Validation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../FireBase";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../store/authSlice";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userName = useSelector((state) => state.auth.userName);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});

  const showHandler = () => {
    setShowPassword((prev) => !prev);
  };
  const focusHandler = () => {
    setFocus(true);
  };
  const inputHandler = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  // const signIn = () => {
  //   signInWithEmailAndPassword(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     )
  //     .then((authUser) => {
  //       console.log(authUser);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  const submitFormHandler = (event) => {
    event.preventDefault();
    

    if (Validation(values)) {
      dispatch(authActions.logIn());
      emailRef.current.value = ""
      passwordRef.current.value = ""
    }
    console.log(values);

    setError(Validation(values));
  };

  // firebase auth
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        // const email = result.user.email;
        dispatch(authActions.showName(name));
        console.log(result);
        // window.location.href = "http://localhost:3000/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="mt-12 lg-px-4 px-2 relative">
        <div className="lg:px-4 mx-auto max-w-[700px] h-[700px] sm:h-[600px]">
          <div className="justify-center items-center lg:p-12 sm:p-4 -top-[10rem] rounded-md shadow-md bg-[#323231] pb-[8rem]">
            <div>
              <h1 className="text-center pt-8 lg:text-4xl sm:text-3xl my-6 font-bcd font-bold text-white">
                Log In
              </h1>
            </div>
            <div className="block justify-center">
              

              <form action="" className="my-6" onSubmit={submitFormHandler}>
                <div className="mx-8 my-6">
                  <input
                    name="email"
                    ref={emailRef}
                    onChange={inputHandler}
                    type="email"
                    className="border-2 border-gray-300 w-full  p-2 rounded"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-400">{errors.email}</p>
                  )}
                </div>

                <div className="mx-8 my-6">
                  <input
                    name="password"
                    ref={passwordRef}
                    onChange={inputHandler}
                    type={showPassword ? "text" : "password"}
                    className="border-2 border-gray-300 w-full p-2 rounded"
                    placeholder="Password"
                    onFocus={focusHandler}
                  />
                  {focus && (
                    <label
                      className="absolute lg:right-[33%] md:right-[15%] right-[12%] mt-[10px] text-sm cursor-pointer"
                      onClick={showHandler}
                    >
                      {showPassword ? "hide" : "show"}
                    </label>
                  )}
                  {errors.password && (
                    <p className="text-red-400">{errors.password}</p>
                  )}
                </div>

                <div className="mx-8 mb-12 hover:bg-opacity-50">
                  <button className=" w-full text-white text-center rounded-md p-3 lg:text-3xl  text-xl bg-amber-700 active:bg-amber-600 visited:bg-amber-500 focus:bg-amber-700 hover:bg-opacity-80 cursor-pointer">
                    LogIn
                  </button>
                  <div>
                    {/* <GoogleSignIn /> */}
                    <div
                      onClick={signInWithGoogle}
                      className="bg-white p-4 text-center cursor-pointer mt-5 rounded-md"
                    >
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSD8Qi955m43ezqePYm9_IyUBeEOrmqvSWT6BmHPL0GpoHx_ztv"
                        alt=""
                        className="h-8 pl-20 absolute lg:left-[35%]  md:left-[25%] left-[1%]"
                      />
                      Sign in with google
                    </div>

                    {isAuth && <div>{userName}</div>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
