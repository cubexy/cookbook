import { Card, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import { RecipeTagList } from "./RecipeTagList";
import { RecipeListItem } from "@/app/recipes/page";
import Link from "next/link";

export const RecipeOverview = ({ item }: { item: RecipeListItem }) => {
  return (
    <Link href={`/recipes/${item.id}`}>
      <div className="w-[calc(100vw-3rem)] md:w-[310px] h-[400px] shadow-lg relative rounded-2xl">
        <div className="w-full h-full relative z-2">
          <Image
            src={item.image}
            alt={item.title}
            fill
            quality={75}
            sizes="(max-width: 600px) 100vw, 310px"
            className="object-cover rounded-2xl"
          />
        </div>
        <Card
          className="!absolute bottom-4 left-4 right-4 z-10 hover:bottom-5 transition-all"
          variant="ghost"
        >
          <Flex className="p-1 max-w-[300px]" direction="column" gap="2">
            <Heading
              size="6"
              weight="medium"
              className="text-white"
              style={{ textShadow: "0 0 10px rgba(0,0,0,0.8)" }}
            >
              {item.title}
            </Heading>
            <RecipeTagList
              tags={item.tags}
              size="2"
              variant="surface"
              color="gray"
            />
          </Flex>
        </Card>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-3 hover:bg-black/20 transition-colors duration-200"></div>
      </div>
    </Link>
  );
};
