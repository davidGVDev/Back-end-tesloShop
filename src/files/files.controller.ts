import {
  BadRequestException,
  Controller,
  Param,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { ConfigService } from '@nestjs/config';
import { fileFilter } from './helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from './helpers/fileNamer.helper';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService,
  ) {}

  @Get('product/:filename')
  getProductImage(
    @Param('filename') filename: string,
    @Res() res: Response,
  ) {
    const path = this.filesService.getStaticProductImage(filename);
    res.sendFile(path);
  }

  @Post('product')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './static/products',
        filename: fileNamer,
      }),
    }),
  )
  uploadProductImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('File is required');
    // console.log(file);
    const secureUrl = `${this.configService.get('HOST_API')}/files/product/${file.filename}`;
    return {
      originalname: file.originalname,
      filename: file.filename,
      secureUrl,
    };
  }
}
