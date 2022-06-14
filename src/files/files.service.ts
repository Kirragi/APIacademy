import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import * as uuid from "uuid";

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      //пполучение формата файла
      const originalFormat = file.originalname.split(".");
      //генерация уникального имени
      const fileName = uuid.v4() + "." + originalFormat[1];
      //назначение папки для сохранения файла
      const filePath = path.resolve(__dirname, "..", "static");
      //проверка существует ли путь сохранения если нет то он создается
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      //сохранение файла
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      throw new HttpException(
        "Произошла ошибка при записи файла",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
