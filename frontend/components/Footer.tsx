import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      className="pt-10 pb-5"
    >
      <Link href="https://github.com/cubexy">
        <Text color="gray" size="1">
          made with {"♥️"} by cubexy
        </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
