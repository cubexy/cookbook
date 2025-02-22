"use client";

import { Recipe } from "@/app/recipes/[id]/page";
import { PersonIcon } from "@radix-ui/react-icons";
import { Flex, Table, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

export const IngredientsList = ({ ingredients }: { ingredients: Recipe["ingredients"] }) => {
  const [servings, setServings] = useState(1);

  const setServingSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setServings(1);
      return;
    }
    const parsedInt = parseInt(event.target.value);
    if (isNaN(parsedInt) || parsedInt < 1 || parsedInt > 999) {
      return;
    }
    setServings(parseInt(event.target.value));
  };

  return (
    <Flex direction="column" align="start" gap="0" className="w-full py-2">
      <Flex gap="2" align="center" justify="center">
        <Text size="2">Zutaten für</Text>
        <TextField.Root placeholder="1" className="w-24" variant="classic" type="number" onChange={setServingSize}>
          <TextField.Slot>
            <PersonIcon />
          </TextField.Slot>
        </TextField.Root>
        <Text size="2">Personen</Text>
      </Flex>
      <Table.Root className="w-full">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell justify="end">
              <Text>Menge</Text>
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              <Text>Zutat</Text>
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ingredients.map((ingredient, index) => {
            const amount = ingredient.amount * servings;
            const unit = amount === 1 ? ingredient.unit : ingredient.unitPlural;

            return (
              <Table.Row key={index}>
                <Table.Cell justify="end" width="120px" className="max-w-[100px] min-w-[100px] text-wrap">
                  {amount} {unit}
                </Table.Cell>
                <Table.Cell width="300px" className="text-wrap">
                  {ingredient.item}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};
