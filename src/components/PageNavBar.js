import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export function PageNavBar() {
  return (
    <Navbar
      style={{position:"absolute", zIndex:"100"}}
      variant="gradient"
      color="transparent"
      className="mx-auto max-w-screen-3xl from-blue-gray-900 to-blue-gray-800 px-4 py-3 backdrop-blur-md"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 h-8 flex"
        >
          <img className="h-12 w-16" src={require("../images/logo.png")} />
          <p className="mt-2">showBiz</p>
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="white">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="white">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
