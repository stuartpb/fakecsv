import { faker } from "https://esm.sh/@faker-js/faker@v9.2.0";
import * as csv from "jsr:@std/csv";

const seed = faker.seed();

async function writeCsv(count) {
  const rows = [];
  for (let i = 0; i < count; ++i) {
    rows.push([
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.streetAddress(),
      faker.location.city(),
      faker.location.state({abbreviated: true}),
      faker.location.zipCode(('#####')),
      faker.phone.number({ style: 'national' })
    ]);
  }
  return Deno.writeTextFile(`${count}-fakes-${seed}.csv`,
    csv.stringify(rows)
  );
}

await writeCsv(25);
await writeCsv(7);
