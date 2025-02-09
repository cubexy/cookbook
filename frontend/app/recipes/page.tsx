import { Avatar, Box, Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";

const ListRecipes = () => {
  return (
    <Card size="2" className="w-[500px] h-[266px]">
      <Flex gap="2" align="center">
        <Inset clip="padding-box" side="top" pb="current">
          <div className="max-w-[200px] max-h-[200px]">
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
  );
};

export default ListRecipes;
