import { Typography } from "@material-tailwind/react";
import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex z-10 full-container">
      <LoginForm />
      <img
        src={require("../images/login4.jpg")}
        alt="image 1"
        className="h-full w-full object-cover brightness-75 "
      />
    </div>
  );
}
