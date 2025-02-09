import { Badge, Flex, Kbd, Text } from "@radix-ui/themes";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      className="mt-10 mb-5"
    >
      <Link href="https://github.com/cubexy">
        <Text color="gray" size="1">
          made with {"<3"} by cubexy
        </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
