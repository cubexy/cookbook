import { BulletPoint } from "@/components/displays/BulletPoint";
import {
  CalendarIcon,
  HandIcon,
  LapTimerIcon,
  PersonIcon
} from "@radix-ui/react-icons";
import {
  Badge,
  Card,
  Flex,
  Heading,
  Quote,
  Separator,
  Table,
  Text,
  TextField
} from "@radix-ui/themes";
import Image from "next/image";

const ShowRecipe = ({ params }: { params: { id: string } }) => {
  return (
    <Flex align="start" justify="center" className="p-6">
      <div className="flex flex-col md:flex-row align-top justify-center w-full gap-5">
        <Flex gap="4" direction="column">
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
            align="center"
            dir="row"
            className="flex-wrap w-full md:w-[400px]"
          >
            <Badge color="gray" size="3">
              <CalendarIcon /> 09.02.2025
            </Badge>
            <Separator orientation="vertical" />
            <Badge color="gray" size="3">
              <LapTimerIcon /> 30min
            </Badge>
            <Separator orientation="vertical" />
            <Badge color="gray" size="3">
              <HandIcon /> mittel
            </Badge>
          </Flex>
        </Flex>
        <Separator size="4" className="!block md:!hidden" />
        <Flex
          direction="column"
          align="start"
          className="w-full md:w-[800px] gap-4 md:gap-2"
        >
          <Heading size="7">
            <Quote>Spaghetti Bolognese</Quote>
          </Heading>
          <Card className="w-full">
            <Flex gap="0" direction="column">
              <Text size="2" weight="light">
                Anmerkung vom Chefkoch
              </Text>
              <Text size="3">
                Spaghetti Bolognese ist ein Klassiker der italienischen Küche.
                Das Gericht hat Wohlfühlgarantie!
              </Text>
            </Flex>
          </Card>
          <Flex
            gap="2"
            align="center"
            dir="row"
            className="flex-wrap w-full md:w-[400px]"
          >
            <Badge size="3">Italienisch</Badge>
            <Badge size="3">Pasta</Badge>
            <Badge size="3">Fleisch</Badge>
          </Flex>
          <Flex gap="2" align="center" justify="center">
            <Text size="2">Zutaten für</Text>
            <TextField.Root
              placeholder="1"
              className="w-24"
              variant="classic"
              type="number"
            >
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
              <Table.Row>
                <Table.Cell
                  justify="end"
                  width="80px"
                  className="max-w-[80px] text-wrap"
                >
                  1 Pckg.
                </Table.Cell>
                <Table.Cell width="300px" className="text-wrap">
                  Nudeln
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell
                  justify="end"
                  width="80px"
                  className="max-w-[80px] text-wrap"
                >
                  1 Schale
                </Table.Cell>
                <Table.Cell width="300px" className="text-wrap">
                  Bolognese
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
          <Flex className="mt-2" direction="column" align="start" gap="2">
            <Text size="4">Zubereitung</Text>
            <BulletPoint
              index={1}
              text="Zwiebeln und Knoblauch schälen und fein hacken, damit sie sich später gut mit der Sauce verbinden."
            />
            <BulletPoint
              index={2}
              text="Karotten und Sellerie putzen und in sehr kleine Würfel schneiden, um eine gleichmäßige Konsistenz zu erhalten."
            />
            <BulletPoint
              index={3}
              text="In einer großen Pfanne oder einem Topf etwas Olivenöl erhitzen und die Zwiebeln sowie den Knoblauch darin glasig anschwitzen."
            />
            <BulletPoint
              index={4}
              text="Das Hackfleisch hinzufügen und bei mittlerer bis hoher Hitze gut anbraten, bis es krümelig und leicht gebräunt ist."
            />
            <BulletPoint
              index={5}
              text="Die klein gewürfelten Karotten und den Sellerie dazugeben und einige Minuten mitbraten, um das volle Aroma zu entfalten."
            />
            <BulletPoint
              index={6}
              text="Das Tomatenmark einrühren und kurz anrösten, damit es eine leicht karamellisierte Note entwickelt."
            />
            <BulletPoint
              index={7}
              text="Mit Rotwein ablöschen und einige Minuten einkochen lassen, bis sich der Alkohol verflüchtigt und das Aroma intensiviert wird."
            />
            <BulletPoint
              index={8}
              text="Gehackte Tomaten und etwas Brühe hinzufügen, anschließend mit Salz, Pfeffer und italienischen Kräutern wie Oregano und Thymian würzen."
            />
            <BulletPoint
              index={9}
              text="Die Sauce bei niedriger bis mittlerer Hitze mindestens 30 Minuten köcheln lassen, idealerweise 1-2 Stunden, damit sich die Aromen gut entfalten."
            />
            <BulletPoint
              index={10}
              text="Mit frisch gekochter Pasta servieren und nach Belieben mit geriebenem Parmesan und frischem Basilikum garnieren."
            />
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default ShowRecipe;
