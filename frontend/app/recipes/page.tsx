import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Inset,
  Strong,
  Text
} from "@radix-ui/themes";
import Image from "next/image";

const ListRecipes = () => {
  return (
    <Flex gap="4" direction="column">
      <Heading size="5">Rezepte</Heading>
      <Card size="2" className="w-[550px] h-[300px] shadow-lg">
        <Flex gap="2" align="center">
          <Inset
            clip="padding-box"
            side="left"
            pb="current"
            className="shadow-2xl"
          >
            <div className="max-w-[200px] min-w-[200px] max-h-[300px] min-h-[300px] relative">
              <Image
                src="/recipe_placeholder.jpg"
                alt="Rezeptbild"
                fill
                quality={75}
                className="object-cover"
              />
            </div>
          </Inset>
        </Flex>
      </Card>
    </Flex>
  );
};

export default ListRecipes;
