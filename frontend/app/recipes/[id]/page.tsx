import { Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";

const ShowRecipe = ({ params }: { params: { id: string } }) => {
  return (
    <Flex align="start" justify="center" className="p-6">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4">
        <div className="w-full md:w-[400px] h-[500px] md:h-[600px] relative">
          <Image
            src={"/recipe_placeholder.jpg"}
            alt="recipe"
            fill
            quality={75}
            sizes="(max-width: 600px) 100vw, 400px"
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>
        <Flex
          gap="2"
          direction="column"
          align="start"
          className="w-full md:w-[600px] mt-2 md:mt-20"
        >
          <Heading size="8">Spaghetti Bolognese</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            culpa, harum ullam voluptas esse exercitationem maiores assumenda,
            ut alias adipisci aliquam quaerat repellat animi? Facilis minus
            dicta soluta? Delectus, animi!
          </p>
        </Flex>
      </div>
    </Flex>
  );
};

export default ShowRecipe;
