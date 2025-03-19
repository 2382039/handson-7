import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ExecutionTime } from 'src/execution-time.interceptors';
import { CreateSongDTO } from './create.songs.dto';

@Controller('songs')
export class SongsController {
    constructor(private songService) {}

    @Post()
    @UseInterceptors(ExecutionTime)
    create(@Body() createSongDTO: CreateSongDTO) {
        return this.songService.create(createSongDTO);
    }

    @Get()
    findAll() {
        return this.songService.findAll();
    }
}
