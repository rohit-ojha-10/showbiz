import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignupForm() {
  const [inputData, setInputData] = useState();
  const navigate = useNavigate();
  const submitData = async () => {
    console.log(inputData);
    const resp = await axios.post(
      "https://showbiz-backend.onrender.com/create-user",
      inputData
    );
    console.log(resp);
    if (resp.data.success) {
      navigate("/login");
    }
  };
  return (
    <Card
      color="white"
      className="w-100 h-100 flex justify-center rounded-none"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
            size="lg"
            label="Name"
          />
          <Input
            onChange={(e) =>
              setInputData({ ...inputData, username: e.target.value })
            }
            size="lg"
            label="Username"
          />
          <Input
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
            size="lg"
            label="Email"
          />
          <Input
            onChange={(e) =>
              setInputData({ ...inputData, password: e.target.value })
            }
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
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            to={"/login"}
          >
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
