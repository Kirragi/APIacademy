import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ValidationPipe } from "src/pipes/validation.pipe";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/users.model";
import { AuthService } from "./auth.service";
import { loginUserDto } from "./dto/auth-login.dto";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "Вход в аккаунт" })
  @Post("/login")
  login(@Body() userDto: loginUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: "Регистрация" })
  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
