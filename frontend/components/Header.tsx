"use client";

import { PlusIcon } from "@radix-ui/react-icons";
import { Flex, Text, Button, TabNav } from "@radix-ui/themes";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <Flex align="center" justify="center" gap="2" className="p-4">
        <div className="py-1 px-1 sm:px-5 w-full max-w-[1400px] rounded-full transition-all">
          <Flex gap="2" justify="between" align="center" className="w-full">
            <Link href="/">
              <Flex gap="0" className="ml-2">
                <Text size="6" weight="bold">
                  🍽️ super
                </Text>
                <Text size="6">kochbuch</Text>
              </Flex>
            </Link>

            <Flex gap="6" align="center">
              <Link href="/recipes">
                <Text size="2" className="hidden sm:block">
                  Mein Kochbuch
                </Text>
              </Link>

              <Link href="/recipes/add">
                <Button variant="classic">
                  <PlusIcon />
                  <Text size="2" className="hidden sm:block">
                    Rezept hinzufügen
                  </Text>
                </Button>
              </Link>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </>
  );
};
