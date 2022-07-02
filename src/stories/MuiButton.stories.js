import { Button } from "@mui/material";
import PropTypes from "prop-types";

export default {
  title: "Mui/Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "contained",
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args}>Hello World</Button>;

export const Red = Template.bind({});
