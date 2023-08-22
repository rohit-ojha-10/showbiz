import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function LoginForm() {
  let username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    async function verification() {
      const verify = await axios.get(
        "https://showbiz-backend.onrender.com/authenticate",
        {
          headers: {
            Authorization: `Bearer ${token ? token : ""}`,
          },
        }
      );
      if (verify.data.success) {
        navigate("/");
      }
      console.log(verify);
    }
    if (token) verification();
  }, []);
  const submitData = async () => {
    const resp = await axios.post(
      "https://showbiz-backend.onrender.com/login",
      {
        username: username.current,
        password: password.current,
      }
    );
    if (resp.data.success) {
      localStorage.setItem("authToken", resp.data.authToken);
      navigate("/");
    }
    console.log(resp);
  };
  return (
    <Card
      className="p-4 w-full h-full text-center m-auto rounded-none"
      color="white"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Login to begin!.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            ref={username}
            onChange={(e) => {
              username.current = e.target.value;
              console.log(username.current);
            }}
            size="lg"
            label="Username"
          />
          <Input
            ref={password}
            onChange={(e) => {
              password.current = e.target.value;
              console.log(password.current);
            }}
            type="password"
            size="lg"
            label="Password"
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button onClick={submitData} className="mt-6" fullWidth>
          Login
        </Button>
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          to={"/signup"}
        >
          New Here? Register here !
        </Link>
      </form>
    </Card>
  );
}
