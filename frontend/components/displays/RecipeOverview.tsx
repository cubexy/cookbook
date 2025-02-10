import { Card, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import { RecipeTagList } from "./RecipeTagList";
import { RecipeListItem } from "@/app/recipes/page";
import Link from "next/link";

export const RecipeOverview = ({ item }: { item: RecipeListItem }) => {
  return (
    <div className="w-[calc(100vw-3rem)] md:w-[310px] h-[400px] shadow-lg relative rounded-2xl">
      <div className="w-full h-full relative z-2">
        <Image
          src={item.image}
          alt={item.title}
          fill
          quality={75}
          sizes="(max-width: 600px) 100vw, 400px"
          className="object-cover rounded-2xl"
        />
      </div>
      <Link href={`/recipes/${item.id}`}>
        <Card
          className="absolute bottom-4 left-4 right-4 z-10 hover:bottom-5 transition-all"
          variant="classic"
        >
          <Flex className="p-2 max-w-[300px]" direction="column" gap="2">
            <Heading size="6" weight="medium">
              {item.title}
            </Heading>
            <RecipeTagList tags={item.tags} size="2" color="gray" />
          </Flex>
        </Card>
      </Link>
    </div>
  );
};
