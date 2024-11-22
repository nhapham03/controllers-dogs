import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('dogs') // handling dogs route
export class DogsController {
  /*
    GET    /dogs       Return a list of all dogs.
    POST   /dogs       Create a new dog entry.
    GET    /dogs/:id   Fetch a single dog by ID.
    PUT    /dogs/:id   Update a dog entry by ID.
    DELETE /dogs/:id   Delete a dog entry by ID.
    */

  @Get() // GET /dogs
  findAll() {
    return 'List of all dogs';
  }

  @Get(':id') // GET dogs/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() //POST /dogs
  create(@Body() dog: {}) {
    return dog;
  }

  @Put(':id') //PUT /dogs/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /dogs/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
