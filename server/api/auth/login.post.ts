import { faker } from "@faker-js/faker";

export default defineEventHandler(async (event) => {
  //create fake user
  const user = {
    id: faker.string.nanoid(5),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  };

  /**
   * In a real app, you should reach out to DB/extract auth service to fetch the user and validate the different stuff
   */
  await setUserSession(event, {
    user,
    loggedInAt: new Date()
    // Any extra fields
  })

  return user;
});