/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Put, Body, Param,} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemService: ItemsService){}

  @Get() //we use the get decorator to do a get request
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id') 
  findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post() //Post decorator to create something new to db
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Delete(':id') 
  delete(@Param('id') id): Promise<Item> {
    return  this.itemService.delete(id);
  }

  @Put(':id')  //Post decorator to create something new to db
  update(@Body() createItemDto: CreateItemDto,@Param('id') id): Promise<Item> {
    return this.itemService.update(createItemDto,id);
  }

}
